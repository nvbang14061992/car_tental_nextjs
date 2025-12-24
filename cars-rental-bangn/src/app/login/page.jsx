"use client";

import React from "react";
import { Button, Form, Input, App } from "antd";
import Link from "antd/es/typography/Link";
import { antdFieldValidation } from "@/helpers/validationHelpers";
import axios from "axios";
import { message } from "antd";

function Login() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/users/login", values);
      message.success(response.data.message);
    } catch (error) {
      message.error(error.response.data.message || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-450 card p-5 card">
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="text-xl uppercase">BangCars - Login</h1>

          <div className="divider"></div>

          <div className="flex flex-col gap-5">
            <Form.Item label="Email" name="email" rules={antdFieldValidation}>
              <Input type="text" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={antdFieldValidation}
            >
              <Input type="password" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Login
            </Button>

            <Link href="/register">Don't have an account? Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
