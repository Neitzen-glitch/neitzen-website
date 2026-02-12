import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json()

        if (!email) return NextResponse.json({ error: "Email required" }, { status: 400})

        TODO: console.log("New subscriber:", email)

        return NextResponse.json({ message: "Subscribed"})
        } catch (err) {
            return NextResponse.json({error:"Server error"}, {status: 500})
        }
    
}