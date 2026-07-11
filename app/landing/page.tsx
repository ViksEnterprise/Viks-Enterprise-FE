"use client";

import Image from "next/image";
import Footer from "../component/Footer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { WE } from "../component/ts/home";

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
              <div className="w-xl text-white px-5 relative z-1 flex flex-col">
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

                <a href="/#companies" className="mt-10 bg-[#C2A302] w-fit hover:bg-[#bf9b4e] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl cursor-pointer">
                  Explore our companies
                </a>
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
          <div className="w-full flex flex-col items-center gap-5 px-5 absolute h-full w-full bg-[#00000080] pt-6">
            <div className="text-white w-full flex flex-col items-center gap-5 pt-6 mt-5">
              <h1 className="text-3xl font-extrabold leading-[155%] uppercase mt-7 pt-5">
                Welcome to Viks Enterprise
              </h1>

              <p className="text-lg w-full text-start">
                Building scalable solutions across industries. We are a company
                for innovation, creativity and excellence. Bringing diverse
                companies together under one vision of progress.
              </p>

              <a href="/#companies" className="bg-[#C2A302] w-fit hover:bg-[#bf9b4e] transition-all duration-300 text-white font-semibold px-8 py-3 rounded-xl cursor-pointer">
                Explore our companies
              </a>
            </div>
          </div>
        </div>
      )}
      <section className="w-full my-5">
        <div className="flex items-center w-full justify-center p-3 my-3 pb-6 flex-col gap-8">
          <div className="text-3xl uppercase text-center relative sm:w-[40%] w-full flex items-center justify-center">
            <motion.h5
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { scale: 0 },
                visible: { scale: 1 },
              }}
              className="bg-white w-fit uppercase font-bold text-[#0F172A] px-3 rounded-md z-1"
            >
              We are a
            </motion.h5>
            <div className="w-full h-[0.62px] bg-[#0F172A] absolute bottom-0 left-0 top-4 -z-1"></div>
          </div>
          <div className="grid sm:grid-cols-4 grid-cols-2 w-full gap-5 lg:px-9 md:px-5 px-3">
            {WE.map((item, i) => (
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { y: 20 },
                  visible: { y: 0 },
                }}
                className="h-[fit] w-full flex flex-col gap-3"
                key={i}
              >
                <div className="flex flex-col gap-3 w-full text-center justify-center items-center">
                  <div className="font-[800] text-base uppercase flex flex-col items-center gap-3 w-fit text-white p-3 rounded-full bg-[#C2A302]">
                    <item.icon size={25} />
                  </div>
                  <span className="font-semibold text-[#0F172A] capitalize text-base leading-6">
                    {item.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {!mobile ? (
        <section className="bg-[#12192f] overflow-hidden">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2">
            <div className="flex items-center px-8 lg:px-20 py-20">
              <div className="max-w-md text-white flex flex-col">
                <h2 className="text-4xl font-bold uppercase mb-8">About Us</h2>
                <p className="text-base leading-8">
                  Viks Enterprise Ltd is a UK-based company dedicated to
                  delivering innovative solutions across technology,
                  professional services and creative industries.
                </p>
                <p className="text-base leading-8 mt-6">
                  Established with a vision to build sustainable and impactful
                  businesses, Viks Enterprise serves as the parent company
                  overseeing a growing portfolio of ventures.
                </p>
                <a
                  href="/about"
                  className="mt-5 bg-[#C8A96A] hover:bg-[#bf9b4e] text-white font-semibold px-10 py-3 w-fit rounded"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative pt-8">
              <Image
                src="/img/about_img.jpg"
                alt=""
                className="w-full h-full relative z-1"
                height={500}
                width={500}
              />

              <div className="absolute left-[-2em] -top-12 w-[41em] bg-[#F5F5F5] rotate-[9deg] h-[140em]"></div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#12192f] overflow-hidden">
          <div className="max-w-7xl mx-auto grid">
            <div className="flex items-center px-5 py-10">
              <div className="max-w-md text-white flex flex-col">
                <h2 className="text-3xl font-bold uppercase mb-6">About Us</h2>
                <p className="text-base leading-7">
                  Viks Enterprise Ltd is a UK-based company dedicated to
                  delivering innovative solutions across technology,
                  professional services and creative industries.
                </p>
                <p className="text-base leading-7 mt-4">
                  Established with a vision to build sustainable and impactful
                  businesses, Viks Enterprise serves as the parent company
                  overseeing a growing portfolio of ventures.
                </p>
                <a
                  href="/about"
                  className="mt-5 bg-[#C8A96A] hover:bg-[#bf9b4e] text-white font-semibold px-10 py-3 w-fit rounded"
                >
                  Learn More
                </a>
              </div>
            </div>

            <div className="relative pt-8 px-5">
              <Image
                src="/img/about_img.jpg"
                alt=""
                className="w-full h-full relative z-1"
                height={500}
                width={500}
              />

              <div className="absolute left-[-1em] bottom-[-8em] w-[12em] bg-[#F5F5F5] rotate-[30deg] h-full"></div>
              <div className="absolute right-[-1em] bottom-[-8em] w-[12em] bg-[#F5F5F5] rotate-[-30deg] h-full"></div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
}
