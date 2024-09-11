import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import Navbar from "@/components/layout/navbar";
import { StoreProvider } from "@/redux/storeProvider";
import ThemeProvider from "@/components/theme/provider";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DigiStore",
  description: "Electronic Shop",
};

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative min-h-screen scrollbar "}>
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 mx-auto max-w-[1644px]">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
