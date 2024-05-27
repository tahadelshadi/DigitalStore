import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function mainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
