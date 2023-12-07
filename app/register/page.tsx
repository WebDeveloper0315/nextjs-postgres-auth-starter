'use client'

import { Form, Button, Radio } from "antd";

import Image from "next/image";
// import Form from "@/components/form";
import Link from "next/link";

export default function Login() {
  const onFinish = (values: any) => {
    console.log("success", values);
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </Link>
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        {/* <Form type="register" /> */}
        <Form layout="vertical" className="flex flex-col gap-3" onFinish={onFinish}>
          <Form.Item label="Register As" name="userType"
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name" name="name"
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
            <input type="text" className="input"></input>
          </Form.Item>
          <Form.Item label="Email" name="email" 
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
            <input type="email" className="input"></input>
          </Form.Item>
          <Form.Item label="Password" name="password"
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
            <input type="password" className="input"></input>
          </Form.Item>
          <Button htmlType="submit">Register</Button>
          <Link href="/login" className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm">
            Already have an account? Login
          </Link>
        </Form>
      </div>
    </div>
  );
}
