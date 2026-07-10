"use client";

import Image from "next/image";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";

export default function Landing() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 650 : false,
  );
  const [isMounted, setIsMounted] = useState(false);

  const checkWindowWIdth = () => {
    setMobile(window.innerWidth <= 650);
  };

  useEffect(() => {
    setIsMounted(true);

    checkWindowWIdth();
    window.addEventListener("resize", checkWindowWIdth);

    return () => window.removeEventListener("resize", checkWindowWIdth);
  }, []);
  if (!isMounted) return null;

  return (
    <>
      {!mobile ? (
        <section className="relative overflow-hidden bg-[#12192f]">
          <div className="grid grid-cols-2 min-h-[650px]">
            <div className="relative flex items-center justify-center px-8 lg:px-20 py-20 z-1">
              <div className="lg:w-xl w-full text-white px-5 relative z-1">
                <h1 className="text-3xl lg:text-4xl font-extrabold leading-[155%] uppercase">
                  Welcome to
                  <br />
                  Viks Enterprise
                </h1>

                <p className="mt-8 lg:text-lg text-base leading-8 text-white">
                  Building scalable solutions across industries. We are a
                  company for innovation, creativity and excellence. Bringing
                  diverse companies together under one vision of progress.
                </p>

                <button className="mt-10 bg-[#D2AF61] hover:bg-[#bf9b4e] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl cursor-pointer">
                  Explore our companies
                </button>
              </div>
              <div className="absolute right-[-5.22em] top-0 w-[150px] h-full bg-[#12192f] rotate-[15deg]"></div>
            </div>

            <div className="relative">
              <Image
                src="/img/hero.jpeg"
                alt=""
                className="w-full h-full"
                height={500}
                width={500}
              />
            </div>
          </div>
        </section>
      ) : (
        <div className="relative w-full h-svh bg-no-repeat bg-cover bg-center bg-[url(/img/hero.jpeg)]">
          <div className="text-white w-full flex flex-col items-center gap-5 px-5 absolute h-full w-full bg-[#00000080] pt-6">
            <h1 className="text-3xl font-extrabold uppercase mt-7 pt-5">
              Welcome to Viks Enterprise
            </h1>

            <p className="text-base w-full text-start">
              Building scalable solutions across industries. We are a company
              for innovation, creativity and excellence. Bringing diverse
              companies together under one vision of progress.
            </p>

            <button className="bg-[#D2AF61] hover:bg-[#bf9b4e] transition-all duration-300 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer">
              Explore our companies
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
