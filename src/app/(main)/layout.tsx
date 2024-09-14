import type { Metadata,Viewport } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import Header from "@/components/layout/header";
import { StoreProvider } from "@/redux/storeProvider";
import ThemeProvider from "@/components/theme/provider";

const APP_NAME = "DigitalStore App";
const APP_DEFAULT_TITLE = "DigitalStore PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "DigiStore",
  description: "Electronic Shop",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className + " relative min-h-screen scrollbar "}>
        <StoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={false}>
            <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800 mx-auto max-w-[1644px]">
              <Header />
              {children}
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
