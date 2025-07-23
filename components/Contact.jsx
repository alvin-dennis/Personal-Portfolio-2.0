import React from "react";
import { CONTACT } from "@/lib/constants";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-[#000000]/40 rounded-[2rem] p-4 sm:p-6 relative border border-white/10 hover:border-white/20 transition-colors backdrop-blur-md shadow-lg min-h-[250px] sm:min-h-[250px] lg:min-h-[350px] max-h-[420px] flex flex-col justify-center mt-8">
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <h2 className="text-[1.75rem] sm:text-[2rem] font-bold font-title">
          Contact
        </h2>
      </div>
      <div className="space-y-3 sm:space-y-4 font-content overflow-y-auto pr-2 flex-grow">
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto px-2 sm:px-4 md:px-6">
          <Link
            href={`mailto:${CONTACT.email}`}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center shadow-md"
          >
            Email Me
          </Link>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-3 text-gray-400 text-sm">OR</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>
          <Link
            href={CONTACT.cal_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center shadow-md"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
}
