import React from "react";
import { logo } from "../../assets";
import "./home.css";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa";
import { languageStore } from "../../locale/languageStore";

function HomeFooter() {
  const { t } = useTranslation();
  const {setSelectedLanguage} = languageStore()
  return (
    <div className=" w-full flex flex-col bg-[#fcfcfc]">
      <div className="flex md:flex-row flex-col py-10 items-center px-20 ">
        <div className="flex flex-col md:items-start items-center md:w-full">
          <img className="w-44 md:mt-0 mt-5" src={logo} alt="." />
          <p className="text-xs mt-3">
            GSR Logistics | All Rights Reserved <br /> | Terms and Conditions |
            Privacy{" "}
          </p>
        </div>

        <div>
          <h1 className="text-lg">{t('ObunaBuling')}</h1>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex gap-3 mt-3">
            <a
                  href="https://t.me/gsrgroup_uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-[#f2f2f2] transition-transform duration-200 ease-in-out transform hover:bg-gray-300 hover:scale-110">
                    <FaTelegram className="text-[#8b8aa6] hover:text-[#e4405f]" />
                  </div>
                </a>
                <a
                  href="https://youtube.com/@gsrgroupuz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-[#f2f2f2] transition-transform duration-200 ease-in-out transform hover:bg-gray-300 hover:scale-110">
                    <FaYoutube className="text-[#8b8aa6] hover:text-[#e4405f]" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/gsrgroup.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-[#f2f2f2] transition-transform duration-200 ease-in-out transform hover:bg-gray-300 hover:scale-110">
                    <AiFillInstagram className="text-[#8b8aa6] hover:text-[#e4405f]" />
                  </div>
                </a>
                <a
                  href="https://www.tiktok.com/@gsrgroupuz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded bg-[#f2f2f2] transition-transform duration-200 ease-in-out transform hover:bg-gray-300 hover:scale-110">
                    <FaTiktok className="text-[#8b8aa6] hover:text-[#e4405f]" />
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
