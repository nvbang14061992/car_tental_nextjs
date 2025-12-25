"use client";

import { ConfigProvider } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

function LayoutProvider({ children }) {
  const router = useRouter();
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
          },
        }}
      >
        <div className="header bg-primary p-3 flex justify-between">
          <h1 className="text-xl text-white">BangCars</h1>
          <div className="flex gap-5 items-center">
            <h1
              className="text-md text-white underline"
              onClick={() => router.push("/profile")}
            >
              Username
            </h1>
            <i className="ri-logout-box-r-line text-white"></i>
          </div>
        </div>
        {children}
      </ConfigProvider>
    </div>
  );
}

export default LayoutProvider;
