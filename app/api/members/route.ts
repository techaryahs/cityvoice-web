import { NextResponse } from "next/server";
import { readMembers } from "@/lib/members-server";

export const runtime = "nodejs";

export async function GET() {
  try {
    const members = readMembers();
    return NextResponse.json(members);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
