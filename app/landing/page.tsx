import Image from "next/image";
import Footer from "../component/Footer";

export default function Landing() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#12192f]">
        <div className="grid lg:grid-cols-2 min-h-[650px]">
          <div className="relative flex items-center justify-center px-8 lg:px-20 py-20 z-1">
            <div className="max-w-xl text-white px-5">
              <h1 className="text-4xl font-extrabold leading-[155%] uppercase">
                Welcome to
                <br />
                Viks Enterprise
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-300">
                Building scalable solutions across industries. We are a company
                for innovation, creativity and excellence. Bringing diverse
                companies together under one vision of progress.
              </p>

              <button className="mt-10 bg-[#D2AF61] hover:bg-[#bf9b4e] transition-all duration-300 text-white font-semibold px-10 py-4 rounded-xl cursor-pointer">
                Explore our companies
              </button>
            </div>
            <div className="absolute right-[-5.22em] top-0 w-[150px] h-full bg-[#12192f] rotate-[15deg]"></div>
          </div>

          {/* Right Image */}
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
      <Footer />
    </>
  );
}
