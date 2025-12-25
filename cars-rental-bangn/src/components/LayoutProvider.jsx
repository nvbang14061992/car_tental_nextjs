"use client";

import { ConfigProvider, message } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";

function LayoutProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = usePathname();
  const getCurrentUser = async () => {
    try {
      const response = await axios.get("/api/users/currentuser");
      setUser(response.data.data);
    } catch (error) {
      message.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (pathname !== "/login" && pathname !== "/register") {
      getCurrentUser();
    }
  }, []);

  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
          },
        }}
      >
        {pathname !== "/login" && pathname !== "/register" && (
          <div className="header bg-primary p-3 flex justify-between items-center">
            <h1 className="text-xl text-white">BangCars</h1>
            <div className="flex gap-5 items-center">
              <h1
                className="text-md text-white underline"
                onClick={() => router.push("/profile")}
              >
                {user?.name}
              </h1>
              <i className="ri-logout-box-r-line text-white"></i>
            </div>
          </div>
        )}
        <div>{children}</div>
      </ConfigProvider>
    </div>
  );
}

export default LayoutProvider;
