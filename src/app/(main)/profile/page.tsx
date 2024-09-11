"use client";
import { User } from "@/interface/interfaces";
import { UserProfileApi } from "@/utils/api/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {  PiUserCircleLight } from "react-icons/pi";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState<User>();
  const p = "font-light text-gray-500";
  useEffect(() => {
    const fetchData = async () => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const result = await UserProfileApi(token);
      if (result) {
        setData(result);
      }
      // if (result == "unauthorized") {
      //   router.push("/login");
      // }
    };
    fetchData();
  }, []);
  if (!data) return <>loading...!</>;
  return (
    <div className=" h-screen">
      <div className="h-4 border-b-2 text-left m-10">
        <span className="bg-white text-xl pr-5 items-center">
          User Profile
        </span>
      </div>
      <div className="bg-white flex flex-row m-10 shadow-md divide-x rounded-md">
        <div className="flex flex-col p-5 justify-center text-center">
          <PiUserCircleLight className="w-40 h-40 mx-auto" />
          <div className="capitalize">{`${data.first_name} ${data.last_name}`}</div>
        </div>
        <div className="flex flex-col flex-1 divide-y">
          <div className="flex flex-col gap-1 p-5">
            <p className={`text-lg ${p}`}>User Profile</p>
            <div className="flex flex-row justify-between">
              <p className={p}>Email: {data.email}</p>
              <p className={p}>Gender: {data.first_name}</p>
              <p className={p}>Phone Number: {data.phone_number}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 p-5">
            <p className={`text-lg ${p}`}>Address</p>
            <p className={p}>{data.address}</p>
          </div>

          <div className="flex flex-col gap-1 p-5">1</div>
        </div>
      </div>
    </div>
  );
}
