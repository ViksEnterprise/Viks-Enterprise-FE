"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { NAVBAROUTE } from "./ts/nav";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 780 : false,
  );
  const [openNav, setOpenNav] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const checkWindowWIdth = () => {
    setMobile(window.innerWidth <= 765);
  };

  const openNavMenu = () => {
    setOpenNav(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavMenu = () => {
    setOpenNav(false);
    document.body.style.overflow = "auto";
  };

  const isScrolled = () => {
    setScrolled(window.pageYOffset > 0 ? true : false);
  };

  useEffect(() => {
    setIsMounted(true);

    checkWindowWIdth();
    window.addEventListener("resize", checkWindowWIdth);
    window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("resize", checkWindowWIdth);
      window.removeEventListener("scroll", isScrolled);
    };
  }, []);
  if (!isMounted) return null;

  return (
    <header
      className={
        !scrolled
          ? "fixed top-0 w-full z-3 md:px-7 px-3 flex items-center justify-center py-2 h-18 sm:bg-[#253E76] bg-[#0F172A] text-white"
          : "fixed top-0 w-full z-3 md:px-7 px-3 flex items-center justify-center py-2 h-18 sm:bg-[#253E76] bg-[#0F172A] text-white shadow shadow-md"
      }
    >
      {!mobile ? (
        <div className="flex justify-between items-center w-[90%] p-3 py-2">
          <div className="w-[fit] h-fit">
            <Image
              src="/img/logo.png"
              className="h-14"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="w-[37%]">
            <nav>
              <ul className="flex items-center gap-5 justify-between">
                {NAVBAROUTE.map((item, i) => (
                  <li key={i} className="text-sm uppercase">
                    <a
                      className={`${`font-[200] ${
                        pathname === item.url ? "text-[#FFD700]" : "text-white"
                      }`}`}
                      href={`${item.url}`}
                      onClick={closeNavMenu}
                    >
                      {item.path}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full p-2 py-2">
          <div className="w-[fit]">
            <Image
              src="/img/logo.png"
              className="h-14"
              alt=""
              height={100}
              width={100}
            />
          </div>
          <div className="w-[fit] h-[fit]">
            <div
              className="w-[fit] flex flex-col gap-1 items-center cursor-pointer"
              onClick={openNavMenu}
            >
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
            </div>
            {openNav ? (
              <nav className="absolute start-0 bottom-0 top-0 bg-gradient-to-r from-[#171717]/50 to-[#0a0a0a]/50 w-full h-svh flex flex-col items-end justify-end">
                <ul className="flex flex-col items-start gap-5 text-white w-[85%] bg-[#0F172A] h-[inherit] p-3">
                  <div className="flex w-full items-end justify-end">
                    <FaTimes
                      className="cursor-pointer"
                      size="20"
                      onClick={closeNavMenu}
                    />
                  </div>
                  {NAVBAROUTE.map((item, i) => (
                    <li key={i} className="w-full text-sm font-medium uppercase">
                      <a
                        className={`${`font-[200] ${
                          pathname === item.url
                            ? "text-[#FFD700]"
                            : "text-white"
                        }`}`}
                        href={`${item.url}`}
                        onClick={closeNavMenu}
                      >
                        {item.path}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </header>
  );
}
