"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    const date = new Date().getFullYear();
    setDate(date);
  }, []);
  return (
    <footer className="w-full h-fit bg-[#F5F7FA]">
      <div className="w-full flex items-center justify-between flex-col h-full">
        <div className="w-full px-5 py-3 flex items-center justify-center px-1 mb-5 pb-5">
          <div className="md:w-[90%] w-full flex flex-col justify-between items-start md:gap-6 gap-7 py-6 flex-wrap">
            <div className="xl:w-88 lg:w-[40%] md:w-[50%] w-full flex flex-col gap-2">
              <Image
                src="/img/logo.png"
                className="w-28 h-20"
                alt="logo"
                height={100}
                width={100}
              />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-5 w-full">
              <div className="w-full flex flex-col gap-2">
                <h2 className="text-lg uppercase font-bold">Quick Links</h2>
                <ul className="flex flex-col gap-2">
                  <li className="font-[200] text-[0.90em] text-black">
                    <a href="/">Home</a>
                  </li>
                  <li className="font-[200] text-[0.90em] text-black">
                    <a href="/about">About</a>
                  </li>
                  <li className="font-[200] text-[0.90em] text-black">
                    <a href="/terms">Terms & Condition</a>
                  </li>
                  <li className="font-[200] text-[0.90em] text-black">
                    <a href="/policy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col gap-3">
                <span className="text-lg uppercase font-bold">Companies</span>
                <ul className="flex flex-col gap-2">
                  <li className="font-[200] text-[0.90em] text-black capitalize">
                    <a href="https://vikscleaning.co.uk/">Viks cleaning</a>
                  </li>
                  <li className="font-[200] text-[0.90em] text-black capitalize">
                    <a href="https://viksgallery.com/">Viks gallery</a>
                  </li>
                  <li className="font-[200] text-[0.90em] text-black capitalize">
                    <a href="#">Viks tech enterprise</a>
                  </li>
                </ul>
              </div>
              <div className="w-full flex flex-col gap-3" id="contact">
                <span className="text-lg uppercase font-bold">Contact</span>
                <div className="flex w-full flex-col gap-2">
                  <a
                    href="mailto:vikscleaning@gmail.com"
                    className="flex items-center font-[200] text-[0.90em] text-black gap-1"
                  >
                    <FiMail size={18} />
                    viksenterprise@gmail.com
                  </a>
                  <a
                    href="tel:+447823972770"
                    className="font-[200] text-[0.90em] text-black flex items-center gap-1"
                  >
                    <BiPhoneCall size={18} />
                    +44 7823972770
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full text-center bg-[#0F172A] p-5 h-full flex md:flex-row flex-col md:items-center items-end justify-between mt-5 gap-4">
          <div className="flex md:gap-5 gap-2 md:flex-row flex-col md:items-center items-end">
            <div className="flex items-center gap-3 w-[fit]">
              <a href="https://www.instagram.com/" className="text-white">
                <BsInstagram size={15} />
              </a>
              <a
                href="https://www.linkedin.com/company/"
                className="text-white"
              >
                <BsLinkedin size={15} />
              </a>
              <a href="https://x.com" className="text-white">
                <FaXTwitter size={15} />
              </a>
            </div>
          </div>
          <span className="font-[200] text-[0.90em] text-white md:w-fit w-full flex items-start gap-1">
            &copy; All right reserved Viks Enterprise {date}
          </span>
        </div>
      </div>
    </footer>
  );
}
