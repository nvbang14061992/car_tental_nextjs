import { NextResponse } from "next/server";
import { connectDB } from "@/config/dbConfig";
import { validateJWT } from "@/helpers/tokenValidation";
import User from "@/models/userModel";
import { message } from "antd";

connectDB();
export async function GET(request) {
  try {
    const userId = await validateJWT(request);
    const user = await User.findById(userId).select("-password");
    return NextResponse.json({
      data: user,
      message: "Current user fetched successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { data: null, message: error.message },
      { status: 500 }
    );
  }
}
