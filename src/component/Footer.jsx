import { FaFacebookF, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1A284C] text-white p-5 shadow-xl">
      <div
        className={
          "flex flex-col lg:flex-row items-center justify-between gap-2"
        }
      >
        {/* LEFT START */}
        <div className="gap-3">
          <div className="font-oswald text-yellow-500 font-medium uppercase text-md mb-2">
            About us
          </div>
          <div className="text-sm text-center lg:text-start text-white hover:text-text-gray-900 cursor-pointer">
            News
          </div>
          <div className="text-sm text-center lg:text-start text-white hover:text-text-gray-900 cursor-pointer">
            Careers
          </div>
          <div className="text-sm text-center lg:text-start text-white hover:text-text-gray-900 cursor-pointer">
            Investors
          </div>
          <div className="text-sm text-center lg:text-start text-white hover:text-text-gray-900 cursor-pointer">
            Sustainability
          </div>
        </div>
        {/* LEFT END */}

        {/* Middle  part */}
        <div className={"flex flex-col items-center justify-center "}>
          <h1 className={"font-oswald text-yellow-500 font-medium uppercase text-md mb-2"}>
            React out at !
          </h1>

          <div className={"flex items-center justify-center gap-1"}>
            <div className="rounded-full flex items-center justify-center text-white  cursor-pointer">
              <HiBuildingOffice size={20} />
            </div>
            <p className="rounded-full flex items-center justify-center text-white  cursor-pointer">
              Vadlamudi, Guntur, A.P.
            </p>
          </div>

          <p className="text-sm text-white hover:text-text-gray-900 cursor-pointer">
            522213
          </p>

          <div className={"flex items-center justify-center gap-1"}>
            <div className="rounded-full flex items-center justify-center text-white  cursor-pointer">
              <IoIosPhonePortrait size={20} />
            </div>
            <p className="text-sm text-white hover:text-text-gray-900 cursor-pointer">
              +91-7549516669
            </p>
          </div>
          <div className={"flex items-center justify-center gap-1"}>
            <div className="rounded-full flex items-center justify-center text-white  cursor-pointer">
              <MdEmail size={20} />
            </div>
            <p className="text-sm text-white hover:text-text-gray-900 cursor-pointer">
              sandipyadav7541@gmail.com
            </p>
          </div>
        </div>
        {/* Middle Part */}
        {/* RIGHT START */}
        <div className="flex flex-col items-center gap-4 justify-center md:justify-start">
          <div className="font-oswald text-yellow-500 font-medium uppercase text-md mb-2">
            Follow us on
          </div>
          <div className={"flex items-center justify-center gap-2"}>
            <div
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <FaFacebookF size={20} />
            </div>
            <Link
              href="https://www.linkedin.com/in/sandip-kumar-yadav-1046s/"
              className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer"
            >
              <FaLinkedin size={20} />
            </Link>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube size={20} />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/[0.25] flex items-center justify-center text-black hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram size={20} />
            </div>
          </div>
        </div>
        {/* RIGHT END */}
      </div>

      <div className={" flex items-center justify-center"}>
        <hr className="border-t-2 border-gray-200 my-4" />
      </div>

      {/* RIGHT START */}
      <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
        <div className="text-[12px] text-white hover:text-text-gray-900 cursor-pointer">
          Guides
        </div>
        <div className="text-[12px] text-white hover:text-text-gray-900 cursor-pointer">
          Terms of Sale
        </div>
        <div className="text-[12px] text-white hover:text-text-gray-900 cursor-pointer">
          Terms of Use
        </div>
        <div className="text-[12px] text-white hover:text-text-gray-900 cursor-pointer">
          Privacy Policy
        </div>
      </div>
      {/* RIGHT END */}

      {/* LEFT START */}
      <div className="text-[12px] mb-5 mt-2 text-white hover:text-gray-100 cursor-pointer text-center ">
        © 2024 Sandip, Inc. All Rights Reserved
      </div>
      {/* LEFT END */}
    </footer>
  );
};

export default Footer;
