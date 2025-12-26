"use client";

import { ConfigProvider, message } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SetCurrentUser } from "@/redux/usersSlice";

function LayoutProvider({ children }) {
  const { currentUser } = useSelector((state) => state.users);
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const getCurrentUser = async () => {
    try {
      const response = await axios.get("/api/users/currentuser");
      dispatch(SetCurrentUser(response.data.data));
    } catch (error) {
      message.error(error.response?.data?.message || error.message);
    }
  };

  const onLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      message.success("Logged out successfully");
      router.push("/login");
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
            <h1
              className="text-xl text-white cursor-pointer"
              onClick={() => router.push("/")}
            >
              BangCars
            </h1>
            <div className="flex gap-5 items-center">
              <h1
                className="text-md text-white underline"
                onClick={() => router.push("/profile")}
              >
                {currentUser?.name}
              </h1>
              <i
                className="ri-logout-box-r-line text-white"
                onClick={onLogout}
              ></i>
            </div>
          </div>
        )}
        <div>{children}</div>
      </ConfigProvider>
    </div>
  );
}

export default LayoutProvider;
