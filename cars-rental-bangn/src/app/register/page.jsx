"use client";

import React from "react";
import { Button, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import { antdFieldValidation } from "@/helpers/validationHelpers";

function Register() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-450 card p-5 card">
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="text-xl uppercase">BangCars - Register</h1>

          <div className="divider"></div>

          <div className="flex flex-col gap-5">
            <Form.Item label="Name" name="name" rules={antdFieldValidation}>
              <Input type="text" />
            </Form.Item>

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
              Register
            </Button>

            <Link href="/login">Already have an account? Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
