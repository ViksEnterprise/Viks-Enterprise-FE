"use client";
// import Footer from "@/app/component/Footer";

export default function Terms() {
  return (
    <>
      <div className="flex items-center justify-center w-full py-6">
        <div className="w-full pt-8 mt-9 flex flex-col gap-4 justify-center items-center h-fit">
          <div className="lg:w-6xl md:w-4xl w-full h-full flex flex-col justify-center items-center text-center py-4 gap-3 md:px-3 px-4">
            <h1 className="md:text-3xl text-2xl font-semibold m-0 leading-[115%] text-[#0F172A] uppercase">
              Terms and Conditions
            </h1>
            <span className="text-sm text-[#64748B] font-[400]">
              These Terms apply to all platforms under Viks Enterprise Ltd
              including Viks Cleaning, ViksGallery, and VTC.
            </span>
          </div>
          <div className="flex flex-col items-start gap-3 h-fit pb-5 lg:w-6xl md:w-4xl w-full md:px-3 px-4 text-[#64748B]">
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Use of website
              </span>
              <span className="text-sm font-medium">
                You agree to use this website lawfully and responsibly. You must
                not misuse, hack or disrupt the platform.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Intellectual Property
              </span>
              <span className="text-sm font-medium">
                All content belongs to Viks Enterprise Ltd and must not be used
                without permission.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Liability
              </span>
              <span className="text-sm font-medium">
                We are not liable for indirect losses, data loss or business
                interruption.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Security
              </span>
              <span className="text-sm font-medium">
                We take reasonable steps to secure our platform, but users must
                also protect their devices.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Governing law
              </span>
              <span className="text-sm font-medium">
                These terms are governed by the laws of England and Wales.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
