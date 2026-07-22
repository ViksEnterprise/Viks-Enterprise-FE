"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { NAVBAROUTE } from "./ts/nav";

export default function NavBar() {
  const pathname = usePathname();

  const [mobile, setMobile] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("/");

  useEffect(() => {
    setMounted(true);

    const resize = () => {
      setMobile(window.innerWidth <= 765);
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    resize();
    onScroll();

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateActiveSection = () => {
      // On pages other than home
      if (pathname !== "/") {
        setActiveNav(pathname);
        return;
      }

      const hash = window.location.hash;

      // Initial load of /#companies etc.
      if (hash && activeNav !== `/${hash}` && window.scrollY < 100) {
        setActiveNav(`/${hash}`);
      }

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[id]"),
      ).filter((el) => ["home", "companies", "contact"].includes(el.id));

      const headerOffset = 100;
      const scrollPosition = window.scrollY + headerOffset;

      let current = "/";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          current = section.id === "home" ? "/" : `/#${section.id}`;
        }
      });

      if (current !== activeNav) {
        setActiveNav(current);

        if (window.location.pathname === "/") {
          history.replaceState(null, "", current === "/" ? "/" : current);
        }
      }
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [pathname, mounted, activeNav]);

  const openNavMenu = () => {
    setOpenNav(true);
    document.body.style.overflow = "hidden";
  };

  const closeNavMenu = () => {
    setOpenNav(false);
    document.body.style.overflow = "auto";
  };

  if (!mounted) return null;

  const isActive = (url: string) => activeNav === url;

  return (
    <header
      className={`fixed top-0 w-full z-50 px-3 md:px-7 h-18 flex justify-center items-center text-white transition-all ${
        scrolled
          ? "bg-[#0F172A] sm:bg-[#253E76] shadow-md"
          : "bg-[#0F172A] sm:bg-[#253E76]"
      }`}
    >
      {!mobile ? (
        <div className="flex justify-between items-center w-[90%]">
          <Image
            src="/img/logo2.png"
            width={100}
            height={100}
            alt="logo"
            className="h-22 w-45"
          />

          <nav>
            <ul className="flex gap-8 items-center">
              {NAVBAROUTE.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    onClick={() => {
                      setActiveNav(item.url);
                    }}
                    className={`uppercase text-sm transition-colors duration-300 hover:text-[#FFD700]/80
                    ${isActive(item.url) ? "text-[#FFD700]" : "text-white"}`}
                  >
                    {item.path}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          <Image
            src="/img/logo2.png"
            width={100}
            height={100}
            alt="logo"
            className="h-18 w-auto"
          />

          <div>
            <div
              className="flex flex-col gap-1 cursor-pointer"
              onClick={openNavMenu}
            >
              <div className="w-6 h-1 bg-white" />
              <div className="w-6 h-1 bg-white" />
              <div className="w-6 h-1 bg-white" />
            </div>

            {openNav && (
              <nav className="fixed inset-0 bg-black/50 flex justify-end">
                <ul className="w-[85%] bg-[#0F172A] p-5 flex flex-col gap-6">
                  <div className="flex justify-end">
                    <FaTimes
                      size={20}
                      className="cursor-pointer"
                      onClick={closeNavMenu}
                    />
                  </div>

                  {NAVBAROUTE.map((item) => (
                    <li key={item.url}>
                      <a
                        href={item.url}
                        onClick={() => {
                          setActiveNav(item.url);
                          closeNavMenu();
                        }}
                        className={`uppercase transition-colors duration-300 hover:text-[#FFD700]/80
                        ${
                          isActive(item.url) ? "text-[#FFD700]" : "text-white"
                        }`}
                      >
                        {item.path}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
