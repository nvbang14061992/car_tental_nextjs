import axios from "axios";
import CustomButton from "../components/CustomButton";
import { cookies } from "next/dist/client/components/headers";

export async function getCurrentUser() {
  try {
    let baseUrl;
    const cookieStore = cookies();
    const token = cookieStore.get("token");

    // check if dev or prod environment
    if (process.env.NODE_ENV === "development") {
      console.log("Development environment");
      baseUrl = "http://localhost:3000";
    } else {
      console.log("Production environment");
      baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    }

    // this is server side rendering, so there is no browser to add cookies and domain for url automatically
    // thus we have to manually add cookie header with token
    const response = await axios.get(`${baseUrl}/api/users/currentuser`, {
      headers: {
        Cookie: `token=${token?.value}`,
      },
    });

    const data = response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
}

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("Home");
  return (
    <div>
      <h1>Home Page</h1>
      {currentUser ? (
        <div>
          <h2>Welcome, {currentUser.name}!</h2>
          <p>Email: {currentUser.email}</p>
        </div>
      ) : (
        <CustomButton title="Login" link="/login" />
      )}
    </div>
  );
}
