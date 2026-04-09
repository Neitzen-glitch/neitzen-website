"use client";

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/app/utils/supabase/client';
import { ChevronRight } from 'lucide-react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Basic Validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    // 2. Supabase Auth Call
    const { error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // This ensures they return to your site after clicking the email link
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-[440px] p-10 bg-white border border-gray-200 shadow-sm text-center">
          <h1 className="text-2xl font-semibold mb-4 text-[#262626]">Check your email</h1>
          <p className="text-[15px] mb-6 text-gray-600">
            We've sent a verification link to <strong>{email}</strong>. 
            Please click the link to activate your AIDA OS account.
          </p>
          <Link 
            href="/auth/signin" 
            className="text-[#0067b8] hover:underline font-medium"
          >
            Back to Sign in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-[440px] p-10 bg-white border border-gray-200 shadow-sm">
        <h1 className="text-2xl font-semibold mb-1 text-[#262626]">Create account</h1>
        <p className="text-[15px] mb-8 text-gray-600">to get started with AIDA OS</p>
        
        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-1">
            <input
              type="email"
              placeholder="someone@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0067b8] transition-colors placeholder:text-gray-400"
              required
            />
          </div>

          <div className="space-y-1">
            <input
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0067b8] transition-colors placeholder:text-gray-400"
              required
            />
          </div>

          <div className="space-y-1">
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0067b8] transition-colors placeholder:text-gray-400"
              required
            />
          </div>
          
          {error && (
            <p className="text-red-600 text-[13px] bg-red-50 p-2 border border-red-100 rounded-sm">
              {error}
            </p>
          )}

          <div className="text-[13px] pt-2 text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-[#0067b8] hover:underline">
              Sign in
            </Link>
          </div>

          <div className="flex justify-end items-center gap-4 pt-4">
            <button 
              type="submit"
              disabled={loading}
              className="bg-[#0067b8] text-white px-10 py-2 font-semibold hover:bg-[#005da6] transition-colors disabled:opacity-50 flex items-center"
            >
              {loading ? "Creating..." : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}