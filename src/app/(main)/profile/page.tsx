"use client";
import { User } from "@/interface/interfaces";
import { UserProfileApi } from "@/fetchApi/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import OrderTable from "@/components/order/orderTable";

export default function Profile() {
  const router = useRouter();
  const [data, setData] = useState<User>();
  const p = "font-light text-gray-500";

  useEffect(() => {
    const fetchData = async () => {
      const token =
        typeof window !== "undefined" ? localStorage.getItem("token") : null;
      const result = await UserProfileApi(token);
      console.log(result);
      if (result) {
        setData(result);
      }
      if (result == "unauthorized") {
        router.push("/login");
      }
    };
    fetchData();
  }, [router]);

  if (!data) return <>loading...!</>;
  return (
    <section className="flex h-screen flex-col gap-8 xs:mx-3 md:mx-8">
      <div className=" h-4 border-b-2 text-left">
        <span className="items-center bg-white pr-5 text-xl">User Profile</span>
      </div>

      <div className=" flex rounded-medium bg-white shadow-small xs:flex-col xs:divide-y md:flex-row md:divide-x md:divide-y-0">
        <div className="flex flex-col justify-center p-5 text-center">
          <Avatar
            className="mx-auto h-28 w-28"
            isBordered
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
          <div className="mt-5 capitalize">{`${data.first_name} ${data.last_name}`}</div>
        </div>
        <div className="flex flex-1 flex-col divide-y">
          <div className="flex flex-col gap-1 p-5">
            <p className={`text-lg text-gray-600`}>User Profile</p>
            <div className="flex justify-between xs:flex-col md:flex-row">
              <p className={p}>Email: {data.email}</p>
              <p className={p}>Gender: {data.first_name}</p>
              <p className={p}>Phone Number: {data.phone_number}</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 p-5">
            <p className={`text-lg text-gray-600`}>Address</p>
            <p className={p}>{data.address}</p>
          </div>

          <div className="flex flex-col gap-1 p-5">1</div>
        </div>
      </div>

      <div>
        <OrderTable />
      </div>
    </section>
  );
}
