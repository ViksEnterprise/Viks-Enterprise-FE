"use client";

import Image from "next/image";
// import { VALUE } from "../component/ts/values";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
// import Footer from "../component/Footer";

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
            <div className="flex flex-col absolute justify-center gap-3 h-full w-full bg-[#00000080] items-start p-5 text-[#ffffff]">
              <h2 className="text-center text-3xl font-semibold uppercase mt-6 text-center flex items-center">
                About
              </h2>
              <span className="text-sm m-0">
                Viks Enterprise Ltd is a UK-based company dedicated to
                delivering innovative solutions across technology, professional
                services and creative industries.
              </span>
              <span className="text-sm m-0">
                Established with a vision to build sustainable and impactful
                businesses, Viks Enterprise serves as the parent company
                overseeing a growing portfolio of ventures.
              </span>
              <span className="text-sm m-0">
                Our operations currently include digital and technical services
                through Viks Technologies, professional cleaning solutions
                through Viks Cleaning, and creative opportunities through
                ViksGallery.
              </span>
              <span className="text-sm m-0">
                Each division is designed to address specific market needs while
                maintaining the values of quality, professionalism, innovation
                and customer satisfaction.
              </span>
              <span className="text-sm m-0">
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
      <hr className="text-[#BDBDBD]" />
      {/* <div className="flex w-full items-center justify-center lg:h-screen h-full bg-[#4942ea] text-white mt-3">
        <div className="flex md:w-6xl w-full p-5">
          <div className="grid justify-between space-y-8 h-full items-start w-full overflow-hidden">
            <motion.h2
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="text-center text-3xl font-semibold uppercase md:mb-5 mb-2"
            >
              Our values
            </motion.h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols md:mt-5 mt-0 pt-5 gap-5 overflow-hidden">
              {VALUE.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    whileInView={"visible"}
                    transition={{ duration: 1.2 }}
                    initial="hidden"
                    variants={{
                      hidden: { y: 90, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="h-54 rounded-lg flex flex-col gap-4 border-white border px-5 justify-center md:mt-5 mt-3"
                    key={i}
                  >
                    <div className="h-7 w-7 rounded-full bg-[#FF0000] relative flex items-start justify-end">
                      <Icon className="absolute -end-2" size={22} />
                    </div>
                    <h6 className="text-3xl">{val.name}</h6>
                    <span className="text-sm">{val.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
      <hr className="text-[#BDBDBD]" />
      <div className="flex w-full items-center justify-center h-72">
        <div className="flex md:w-6xl w-full items-center justify-between p-5">
          <div className="flex flex-col gap-6 items-center w-full text-center overflow-hidden">
            <motion.h2
              whileInView={"visible"}
              transition={{ duration: 1.2 }}
              initial="hidden"
              variants={{
                hidden: { x: -120, opacity: 0 },
                visible: { x: 0, opacity: 1 },
              }}
              className="text-center text-[#00008B] text-4xl font-semibold"
            >
              If you have any questions
            </motion.h2>
            <span className="text-base font-medium">
              Feel free to contact us by clicking on the button
            </span>
            <a
              href="/contact"
              className="bg-[#0C06AC] text-sm h-11 flex items-center justify-center w-42 cursor-pointer rounded-lg text-white p-3 px-4 m-0"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
