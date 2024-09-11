import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="container mx-auto p-36 flex flex-col  text-center gap-5">
        <h1 className=" font-extrabold text-2xl">404 - Page Not Found</h1>

        <Link className="text-blue-600" href={"/"}>
         Return Home
        </Link>
      </div>
      
    </>
  );
}
