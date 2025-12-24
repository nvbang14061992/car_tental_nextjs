import jwt from "jsonwebtoken";

export async function validateJWT(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      throw new Error("No token found");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      throw new Error("Invalid token");
    }

    const userId = decoded._id;

    return userId;
  } catch (error) {
    console.error("Error validating JWT:", error);
    throw error;
  }
}
