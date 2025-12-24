import { NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";

connectDB();
export async function GET() {
  return NextResponse.json({ data: "API is working!" }, { status: 200 });
}
