"use client";
import Footer from "@/app/component/Footer";

export default function Policy() {
  return (
    <>
      <div className="flex items-center justify-center w-full py-6">
        <div className="w-full pt-8 mt-9 flex flex-col gap-4 justify-center items-center h-fit">
          <div className="lg:w-6xl md:w-4xl w-full h-full flex flex-col justify-center items-center text-center py-4 md:px-3 px-4">
            <h1 className="md:text-3xl text-2xl font-semibold m-0 leading-[115%] text-[#0F172A] uppercase">
              Privacy policy
            </h1>
          </div>
          <div className="flex flex-col items-start gap-3 h-fit pb-5 lg:w-6xl md:w-4xl w-full md:px-3 px-4 text-[#64748B]">
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Introduction
              </span>
              <span className="text-sm font-medium">
                Viks Enterprise Ltd ('we', 'our', 'us') is committed to
                protecting your personal data in accordance with UK GDPR and the
                Data Protection Act 2018.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Information we collect
              </span>
              <span className="text-sm font-medium">
                We may collect personal data including name, email, phone
                number, address, service details, payment-related data, and
                technical data such as IP address and device information.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                How we use your data
              </span>
              <span className="text-sm font-medium">
                We use your data to provide services, process transactions,
                communicate with users, improve performance, and ensure
                security.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Legal basis
              </span>
              <span className="text-sm font-medium">
                We process personal data based on consent, contractual
                necessity, legal obligations, and legitimate business interests.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Data sharing
              </span>
              <span className="text-sm font-medium">
                We do not sell personal data. We may share information with
                trusted service providers, payment processors and legal
                authorities when required.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Data retention
              </span>
              <span className="text-sm font-medium">
                We retain data only as long as necessary for service delivery,
                legal compliance, and dispute resolution.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Data security
              </span>
              <span className="text-sm font-medium">
                We implement appropriate technical and organizational measures
                to protect your data, although no system is completely secure.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Your rights
              </span>
              <span className="text-sm font-medium">
                Under UK GDPR, you have the right to access, correct, delete,
                restrict or object to processing of your personal data.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Cookies
              </span>
              <span className="text-sm font-medium">
                We may use cookies and tracking technologies to enhance user
                experience and analyze platform performance.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Third-party links
              </span>
              <span className="text-sm font-medium">
                Our platforms may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Updates
              </span>
              <span className="text-sm font-medium">
                We may update this Privacy Policy from time to time. Continued
                use of our services implies acceptance of any changes.
              </span>
            </div>
            <div className="grid gap-2">
              <span className="md:text-lg text-base font-bold capitalize">
                Contact
              </span>
              <span className="text-sm font-medium">
                For inquiries, contact: <a href="mailto:viksenterprise@gmail.com" className="text-blue-500 hover:underline">
                  viksenterprise@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
