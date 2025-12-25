import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(
      { data: null, message: "Logged out successfully" },
      { status: 200 }
    );

    response.cookies.set("token", "", {
      httpOnly: true,
      path: "/",
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { data: null, message: error.message },
      { status: 500 }
    );
  }
}
