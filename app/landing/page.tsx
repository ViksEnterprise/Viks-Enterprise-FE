"use client";

import Image from "next/image";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";

export default function Landing() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 780 : false,
  );
  const [isMounted, setIsMounted] = useState(false);

  const checkWindowWIdth = () => {
    setMobile(window.innerWidth <= 765);
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
          <div className="grid lg:grid-cols-2 min-h-[650px]">
            <div className="relative flex items-center justify-center px-8 lg:px-20 py-20 z-1">
              <div className="max-w-xl text-white px-5">
                <h1 className="text-4xl font-extrabold leading-[155%] uppercase">
                  Welcome to
                  <br />
                  Viks Enterprise
                </h1>

                <p className="mt-8 text-lg leading-8 text-[#64748B]">
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
          <div className="text-white py-5 w-full flex flex-col items-center gap-5">
            <h1 className="text-3xl font-extrabold uppercase">
              Welcome to Viks Enterprise
            </h1>

            <p className="text-base text-[#64748B] w-full text-start">
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
