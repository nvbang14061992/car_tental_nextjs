import { NextResponse } from "next/server";
import User from "@/models/userModel";
import { connectDB } from "@/config/dbConfig";
import bcrypt from "bcryptjs";
import { message } from "antd";
import jwt from "jsonwebtoken";

connectDB();

export async function POST(request) {
  try {
    // access request body
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // check if user existed
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("Not found user");
    }
    // compare password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    const response = NextResponse.json({ message: "Login successful" });

    // generate token
    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // set cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { message: "Internal Server Error", status: 500 },
      { status: 500 }
    );
  }
}
