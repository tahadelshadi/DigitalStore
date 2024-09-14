"use client";
import Link from "next/link";
import MobileNavbar from "./nav/mobileNavbar";
import DesktopNavbar from "./nav/desktopNavbar";
import NavSearchForm from "./nav/navSearchForm";
import NavbarLinks from "./nav/navbarLinks";

const Header = () => {
  return (
    <nav className="flex flex-col gap-4 md:px-8 xs:px-3 py-5 mb-5 bg-white dark:bg-slate-800 shadow-sm z-50 max-w-[1644px] ">
      <div className="md:flex md:flex-row justify-between">
        <div className="">
          <div className="md:flex md:flex-row gap-4 justify-between text-center  mx-auto items-center">
            <Link className="nav-logo font-bold text-2xl " href={"/"}>
              <p className="xs:hidden md:block">LOGO</p>
            </Link>
            <NavSearchForm />
          </div>
        </div>
        <DesktopNavbar />
      </div>
      <NavbarLinks />
      <MobileNavbar />
    </nav>
  );
};

export default Header;
