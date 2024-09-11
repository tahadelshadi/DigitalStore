import React from "react";
import "@/css/globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="login-layout bg-slate-100">
        <main>{children}</main>
      </body>
    </html>
  );
}