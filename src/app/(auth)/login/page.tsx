"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { LoginUserApi } from "@/fetchApi/authApi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await LoginUserApi(email, password);
    if (result) {
      router.push("/");
    }
  };

  return (
    <form className="flex h-screen justify-center" onSubmit={handleLogin}>
      <div className="flex flex-col gap-5 w-[400px] h-fit my-auto  justify-center bg-white p-12 rounded-lg shadow-2xl ">
        <p className="text-xl font-semibold text-gray-600 ">
          Welcome to the shop!
        </p>
        <div className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
          />
          <input
            name="password"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <Link className="text-blue-600" href="/forgot">
          Forgot Password?
        </Link>
        <button
          type="submit"
          className="gap-2 flex flex-row h-fit justify-center items-center bg-blue-700 px-5 py-1.5 rounded-md text-sm text-white">
          Login
        </button>
        <p>
          New on our platform?
          <Link className="text-blue-600 mx-1" href="/register">
            Create an account
          </Link>
        </p>
        <div className="h-4 border-b-2 text-center">
          <span className="bg-white text-xl text-slate-700 px-3 items-center">
            or
          </span>
        </div>

        <div className="flex justify-center mt-6">
          <Link href={""}>
            <FaGoogle className="text-rose-500" />
          </Link>
        </div>
      </div>
    </form>
  );
}
