"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Footer from "../component/Footer";
import { ABOUT, WHY } from "../component/ts/home";
import { BiCheck } from "react-icons/bi";

export default function About() {
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
    <div>
      <div className="flex w-full items-center justify-center lg:h-screen h-full py-5 mt-5">
        {!mobile ? (
          <div className="flex w-6xl items-center justify-between p-5 mt-7 pt-5">
            <div className="grid gap-3 items-start w-xl text-[#64748B]">
              <h2 className="text-center text-[#0F172A] text-4xl font-semibold uppercase">
                About
              </h2>
              <span className="text-base m-0">
                Viks Enterprise Ltd is a UK-based company dedicated to
                delivering innovative solutions across technology, professional
                services and creative industries.
              </span>
              <span className="text-base m-0">
                Established with a vision to build sustainable and impactful
                businesses, Viks Enterprise serves as the parent company
                overseeing a growing portfolio of ventures.
              </span>
              <span className="text-base m-0">
                Our operations currently include digital and technical services
                through Viks Technologies, professional cleaning solutions
                through Viks Cleaning, and creative opportunities through
                ViksGallery.
              </span>
              <span className="text-base m-0">
                Each division is designed to address specific market needs while
                maintaining the values of quality, professionalism, innovation
                and customer satisfaction.
              </span>
              <span className="text-base m-0">
                At Viks Enterprise Ltd, we believe in creating opportunities,
                empowering talent and delivering value-driven solutions that
                help individuals and businesses grow. As we continue to expand,
                our focus remains on building trusted brands, embracing
                innovation and creating a lasting impact in the industries we
                serve.
              </span>
            </div>
            <div className="relative w-fit h-full">
              <div className="overflow-hidden">
                <motion.div
                  whileInView={"visible"}
                  transition={{ duration: 1.2 }}
                  initial="hidden"
                  variants={{
                    hidden: { x: 120, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                >
                  <Image
                    src="/img/about.jpg"
                    alt=""
                    className="h-120 w-lg"
                    height={500}
                    width={500}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-svh bg-no-repeat bg-cover bg-center bg-[url(/img/about-mb.jpg)]">
            <div className="flex flex-col absolute gap-5 h-full w-full bg-[#00000080] items-start p-5 text-[#ffffff]">
              <h2 className="text-center text-3xl font-semibold uppercase mt-7 justify-center flex items-center w-full pt-5">
                About
              </h2>
              <span className="text-base m-0">
                Viks Enterprise Ltd is a UK-based company dedicated to
                delivering innovative solutions across technology, professional
                services and creative industries.
              </span>
              <span className="text-basw m-0">
                Established with a vision to build sustainable and impactful
                businesses, Viks Enterprise serves as the parent company
                overseeing a growing portfolio of ventures.
              </span>
              <span className="text-base m-0">
                Our operations currently include digital and technical services
                through Viks Technologies, professional cleaning solutions
                through Viks Cleaning, and creative opportunities through
                ViksGallery.
              </span>
              <span className="text-base m-0">
                Each division is designed to address specific market needs while
                maintaining the values of quality, professionalism, innovation
                and customer satisfaction.
              </span>
              <span className="text-base m-0">
                At Viks Enterprise Ltd, we believe in creating opportunities,
                empowering talent and delivering value-driven solutions that
                help individuals and businesses grow. As we continue to expand,
                our focus remains on building trusted brands, embracing
                innovation and creating a lasting impact in the industries we
                serve.
              </span>
            </div>
          </div>
        )}
      </div>
      <section className="w-full my-5 flex items-center justify-center">
        <div className="flex items-center justify-center p-3 my-3 pb-6 flex-col gap-8 sm:w-[90%] w-full">
          <div className="grid sm:grid-cols-2 grid-cols w-full gap-7 lg:px-9 md:px-5 px-3">
            {ABOUT.map((item, i) => (
              <motion.div
                whileInView={"visible"}
                transition={{ duration: 1.2 }}
                initial="hidden"
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
                className="h-[fit] w-full flex flex-col gap-3"
                key={i}
              >
                <div className="flex flex-col gap-3 w-full border-solid border-1 border-slate-300 p-5 rounded-[8px] h-48 justify-center shadow-md text-center">
                  <h6 className="font-[800] text-lg uppercase flex flex-col items-center gap-3 w-full">
                    {item.title}
                  </h6>
                  <p className="font-[200] text-lg leading-6">
                    {item.description}
                  </p>
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
                <h2 className="text-4xl font-bold uppercase mb-8">
                  Why choose us
                </h2>
                <div className="flex flex-col gap-5 mt-3">
                  {WHY.map((item, i) => (
                    <div className="flex items-center gap-5" key={i}>
                      <div className="h-7 w-7 rounded-full bg-[#C8A96A] relative flex items-start justify-end">
                        <div className="absolute -end-2 rounded-full p-1 border border-white">
                          <BiCheck size={14} />
                        </div>
                      </div>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pt-8">
              <Image
                src="/img/about-sec.jpg"
                alt=""
                className="w-full h-full relative z-1"
                height={500}
                width={500}
              />

              <div className="absolute left-[-2em] -top-12 w-[41em] bg-[#ffffff] rotate-[9deg] h-[140em]"></div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-[#12192f] overflow-hidden">
          <div className="max-w-7xl mx-auto grid">
            <div className="flex items-center px-5 py-10">
              <div className="max-w-md text-white flex flex-col">
                <h2 className="text-3xl font-bold uppercase mb-8">
                  Why choose us
                </h2>
                <div className="flex flex-col gap-5 mt-3">
                  {WHY.map((item, i) => (
                    <div className="flex items-center gap-5" key={i}>
                      <div className="h-7 w-7 rounded-full bg-[#C8A96A] relative flex items-start justify-end">
                        <div className="absolute -end-2 rounded-full p-1 border border-white">
                          <BiCheck size={14} />
                        </div>
                      </div>
                      <span className="text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative pt-8 px-5">
              <Image
                src="/img/about-sec.jpg"
                alt=""
                className="w-full h-full relative z-1"
                height={500}
                width={500}
              />

              <div className="absolute left-[-1em] bottom-[-8em] w-[12em] bg-[#ffffff] rotate-[30deg] h-full"></div>
              <div className="absolute right-[-1em] bottom-[-8em] w-[12em] bg-[#ffffff] rotate-[-30deg] h-full"></div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}
