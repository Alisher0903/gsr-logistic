import React from "react";
import { logo } from "../../assets";
import "./home.css";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function HomeFooter() {
  const { t } = useTranslation();
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
          <h1 className="text-lg">Obuna bo’ling</h1>
          <div className="flex items-center gap-5 justify-between">
            <div className="flex gap-3 mt-3">
              <div className="p-2 rounded bg-[#f2f2f2]">
                <FaFacebookF color="#8b8aa6" />
              </div>
              <div className="p-2 rounded bg-[#f2f2f2]">
                <FaTwitter color="#8b8aa6" />
              </div>
              <div className="p-2 rounded bg-[#f2f2f2]">
                <AiFillInstagram color="#8b8aa6" />
              </div>
              <div className="p-2 rounded bg-[#f2f2f2]">
                <FaLinkedinIn color="#8b8aa6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFooter;
