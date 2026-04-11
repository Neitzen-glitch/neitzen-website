import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // If the URL has a 'next' parameter (like ?next=/dashboard), use it. 
  // Otherwise, default to your AIDA page.
  const next = searchParams.get('next') ?? '/aida-os'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) { return cookieStore.get(name)?.value },
          set(name: string, value: string, options: CookieOptions) { 
            cookieStore.set({ name, value, ...options }) 
          },
          remove(name: string, options: CookieOptions) { 
            cookieStore.set({ name, value: '', ...options }) 
          },
        },
      }
    )

    // Exchange the code for a real session
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Success: Redirect to the cloud version of your page
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // If something goes wrong (expired link, etc.), send them to a login or error page
  return NextResponse.redirect(`${origin}/login?error=Verification failed`)
}