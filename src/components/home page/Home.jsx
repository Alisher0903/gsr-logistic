import React, { useState } from "react";
import {
  asset1,
  asset2,
  asset3,
  asset4,
  asset5,
  asset6,
  asset7,
  asset8,
  container,
  container1,
  container2,
  container3,
  container4,
  container5,
  person,
  person2,
  person3,
  person4,
  person5,
  person6,
  contactImg,
} from "../../assets";
import "./home.css";
import HomeFooter from "./HomeFooter";
import HomeNav from "../navbar/HomeNav";
import { FaFacebookF, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { url } from "../api";
import { t } from "i18next";

const images = [asset1, asset2, asset3, asset4, asset5, asset6, asset7, asset8];

const data = [
  {
    name: "John Carter",
    subTitle: "CEO & Co-Founder",
    image: person,
  },
  {
    name: "Sophie Moore",
    subTitle: "CEO & Co-Founder",
    image: person2,
  },
  {
    name: "Matt Cannon",
    subTitle: "VP of Marketing",
    image: person3,
  },
  {
    name: "Andy Smith",
    subTitle: "VP of Product",
    image: person4,
  },
  {
    name: "Lily Woods",
    subTitle: "VP of Product",
    image: person5,
  },
  {
    name: "Patrick Meyer",
    subTitle: "VP of Product",
    image: person6,
  },
];

function Home({ changeLang }) {
  const [contact, setContact] = useState({
    name: "",
    activity: "",
    phoneNumber: "",
    description: "",
  });

  const [result, setResult] = useState({
    kub: 0,
    kg: 0,
    where: "",
    whereTo: "",
    typerCargo: "",
  });
  const [resultData, setResultData] = useState(null);

  const handleClick = async () => {
    try {
      const { data } = await axios.post(`${url}contact`, contact);
      toast.success(data.message);
    } catch (error) {
      toast.error(`${t('taos')}`);
    }
  };

  const getResult = async () => {
    try {
      const { data } = await axios.post(`${url}category/result`, {
        ...result,
        kg: +result.kg,
        kub: +result.kub,
      });
      setResultData(data.body);
    } catch (error) {
      toast.error(`${t('taos')}`);
      setResultData();
    }
  };

  return (
    <>
      <div
        className="w-full z-[10000] font-dmSans"
        style={{ backgroundImage: `url(${container})` }}
      >
        <HomeNav changeLang={changeLang} />
        <div
          id="home"
          className="flex items-center flex-wrap justify-center min-h-screen bg-cover gap-10 bg-center"
        >
          <div className="flex flex-col items-start p-8 space-y-10 text-white max-w-xl">
            <h1 className="text-6xl font-bold">{t("home")}</h1>
            <p className="my-20 text-[18px] font-light">
              {t("info")}
            </p>
            <ul className="space-y-2 font-bold text-[18px]">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {t('yuklar')}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {t("hujjat")}
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-red-500 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                {t("yuklar")}
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="volume">
                  {t("razmer")}
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, kub: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="volume"
                  placeholder={t("m3")}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="weight">
                  {t("ogirlik")}
                </label>
                <input
                  onChange={(e) => setResult({ ...result, kg: e.target.value })}
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="weight"
                  placeholder={t("kg")}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="from">
                  {t("qayerga")}
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, where: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="from"
                  placeholder={t("qayer")}
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="to">
                  {t("qayerdan")}
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, whereTo: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="to"
                  placeholder={t("Toshkent")}
                />
              </div>
              <div className="flex gap-10 items-center">
                <div className="col-span-2 flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="type">
                    {t("qancha")}
                  </label>
                  <input
                    onChange={(e) =>
                      setResult({ ...result, typerCargo: e.target.value })
                    }
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="type"
                    placeholder={t("mahsulot")}
                  />
                </div>
                <h1 className="text-xl mt-7">
                  {resultData && !isNaN(resultData) && resultData !== ""
                    ? `$${resultData.toFixed(1)}`
                    : ""}
                </h1>
              </div>
            </div>
            <button
              onClick={getResult}
              className="w-full rounded-full py-2 mt-4 bg-red-500 text-white"
            >
              {t("xisoblash")}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 overflow-x-hidden ">
        {/* first section */}
        {/* end section */}

        {/* start second section */}
        <div
          id="about"
          className="flex flex-col items-center justify-center min-h-screen p-4 bg-white"
        >
          <div className="text-center">
            <h2 className="text-xl font-bold text-red-600 uppercase">
              {t("komponiya")}
            </h2>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {t("mijozlar")} <br /> {t("muhim")}
            </h1>
          </div>
          <div className="relative mt-8">
            <img
              src={container1}
              alt="Warehouse workers"
              className="rounded-lg"
            />
            <button className="absolute top-2/4 inset-0 flex items-center justify-center w-16 h-16 mx-auto bg-white rounded-full shadow-lg">
              <PlayIcon className="w-8 h-8 text-gray-900" />
            </button>
          </div>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact");

              const topOffset =
                contactSection.getBoundingClientRect().top + window.pageYOffset;
              window.scrollTo({
                top: topOffset,
                behavior: "smooth",
              });
            }}
            className="mt-8 bg-red-600 text-white rounded-full px-6 py-2"
          >
            {t('boglanish')}
          </button>
        </div>
        {/* end second section */}

        {/* start forth section */}
        <div className="w-full flex justify-center items-center gap-5  flex-col">
          <h1 className="text-4xl font-bold">{t("xizmat_turi")}</h1>
          <p className="p-2 text-[18px]">
            {t("yuk_davlati")}
          </p>
          <div className="flex gap-5 p-3 my-5 flex-wrap">
            <div className="relative text-center flex justify-center">
              <img src={container2} alt="" />
              <div className="absolute bottom-20">
                <h5 className="md:text-[22px] text-lg text-white font-bold">
                  {t("yuk_mashinasi")}
                </h5>
                <p className="md:text-[18px] text-sm text-white w-96 mt-2">
                  {t("xitoydan_yuk")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 flex-wrap">
              <div className="relative">
                <img src={container3} alt="" />
                <div className="absolute top-14 ml-10">
                  <h5 className="md:text-[22px] text-lg text-white font-bold">
                    {t("cargo")}
                  </h5>
                  <p className="md:text-[18px] text-sm text-white w-96 mt-2">
                    {t("avia_cargo")}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img src={container4} alt="" />
                <div className="absolute top-14 ml-10">
                  <h5 className="md:text-[22px] text-lg text-white font-bold">
                    {t("temir_yul")}
                  </h5>
                  <p className="md:text-[18px] text-sm text-white w-72 mt-2">
                    {t("narxi_arzon")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end fourth section */}
        {/* start five section */}
        <div class="text-center py-20 p-20 border-y my-10">
          <h2 class="text-4xl font-bold mb-4">{t("yutuqlarimiz")}</h2>
          <p class="text-lg text-[#6F6F6F] mb-12">
            {t("natija")}
          </p>
          <div class="grid grid-cols-1 md:place-items-center md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center w-48">
              <span class="text-[44px] font-bold">
                80 <span class="text-red-600">%</span>
              </span>
              <p class="text-xl mt-2">{t("hamkorlik")}</p>
            </div>
            <div class="text-center w-48">
              <span class="text-[44px] font-bold">3.200+</span>
              <p class="text-xl mt-2">{t("keltirilgan_yuklar")}</p>
            </div>
            <div class="text-center w-48">
              <span class="text-[44px] font-bold">125+</span>
              <p class="text-xl mt-2">{t("keltirilgan_butun_yuklar")}</p>
            </div>
            <div class="text-center w-48">
              <span class="text-[44px] font-bold">14 {t('kun')}</span>
              <p class="text-xl mt-2">{t("muddat")}</p>
            </div>
          </div>
        </div>

        {/* end five section */}
        {/* six section */}
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
          <div className="w-full bg-white rounded-lg shadow-md p-6">
            <h2 className="text-4xl font-bold mb-2">{t("mijoz_fikri")}</h2>
            <p className="text-muted-foreground text-lg text-[#6F6F6F] my-6">
              {t("gsrlogistik")} <br />{" "}
              {t("ishonch")}
            </p>
            <div className="flex flex-col align-middle md:flex-row">
              <img
                src={container5}
                alt="Customer"
                className="w-full md:w-2/6 h-[100%] bg-cover bg-center object-cover md:rounded-l-lg rounded-lg"
              />
              <div className="w-full md:w-1/2 h-full flex flex-col md:py-[11.35rem] justify-center bg-gray-50 p-6 rounded-lg md:rounded-r-lg">
                <p className="text-xl font-semibold mb-4">
                  {t("sifatli_xizmat")}
                </p>
                <p className="text-muted-foreground mb-4">
                  {t("xitoydan_tashqari")}
                </p>
                <p className="font-semibold">Ariqulov Erkin</p>
                <p className="text-muted-foreground">SHVEY DETAILS OOO</p>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-2">
              <button className="p-2 bg-red-500 text-white rounded-full">
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button className="p-2 bg-red-500 text-white rounded-full">
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* end six section */}
        {/*  seven */}
        <div id="hamkorlar" className="bg-[#fcfcfc] p-4 py-10 my-10 mt-22">
          <div className="flex flex-wrap gap-5 w-full px-20 justify-between">
            <div>
              <h3 className="text-4xl font-bold">{t("hamkorlarimiz")}</h3>
              <h4 className="text-4xl font-bold">1000+</h4>
            </div>
            <div>
              <p className="text-[#b8252a]">{t("hamkorlar")}</p>
              <p className="text-[#a3a3a3] text-lg">
                {t("bizvamijozlar")} <br />
                {t("taminlanadi")}
              </p>
            </div>
          </div>
          <div className="w-full  flex flex-wrap justify-evenly px-16 mt-10 gap-10">
            {images.map((item) => (
              <img className="bg-cover object-contain w-44 " src={item} />
            ))}
          </div>
        </div>
        {/* end seven */}
        {/* eight */}
        <div
          id="hodimlar"
          className="my-10 w-full flex flex-col justify-center"
        >
          <div className="mt-20">
            <h1 className="text-4xl font-bold text-center">
              {t("xitoyvaUzb")}
            </h1>
            <div className="w-full sm:w-3/4 md:w-1/3 mx-auto mt-6 p-2">
              <p className="text-center text-lg text-[#6F6F6F]">
               {t("eachteam")}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  mx-auto gap-10 mt-20">
            {data.map((item) => (
              <div>
                <img
                  className="w-72 h-60 rounded-xl bg-cover object-cover"
                  src={item.image}
                  alt=""
                />
                <h1 className="text-xl font-bold mt-2">{item.name}</h1>
                <p className="text-[#6e6e6e]">{item.subTitle}</p>
                <div className="flex gap-3 mt-3">
                  <div className="p-2 rounded bg-[#f2f2f2]">
                    <FaFacebookF color="#8b8aa6" />
                  </div>

                  <div className="p-2 rounded bg-[#f2f2f2]">
                    <AiFillInstagram color="#8b8aa6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* eight */}
        <div
          className="flex flex-col items-center justify-center min-h-screen p-4 bg-white"
          id="contact"
        >
          <h1 className="md:text-[72px]  mt-5 font-bold text-center">
            {t("baxtliMijoz")}
          </h1>
          <p className="my-16 text-center text-lg">
            {t("malumotlarnituldiring")}
          </p>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <form className="space-y-4">
              <div className="flex gap-5">
                <div className="space-y-2 flex flex-col">
                  <label className="font-bold" htmlFor="name">
                   {t("ismingiz")}
                  </label>
                  <input
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="name"
                    placeholder={t("xojakbar")}
                    onChange={(e) =>
                      setContact((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label className="font-bold" htmlFor="activity">
                    {t("Faoliyatingiz")}
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, activity: e.target.value })
                    }
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="activity"
                    placeholder={t("biznes")}
                  />
                </div>
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="font-bold" htmlFor="phone">
                  {t("Phone")}
                </label>
                <input
                  onChange={(e) =>
                    setContact({ ...contact, phoneNumber: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="phone"
                  placeholder="(90) 123 45 67"
                />
              </div>
              <div className="space-y-3">
                <label className="font-bold mt-5" htmlFor="details">
                  {t("yukhaqida")}
                </label>
                <textarea
                  onChange={(e) =>
                    setContact({ ...contact, description: e.target.value })
                  }
                  className="outline-none rounded-xl p-3 w-full h-32 bg-[#f2f2f2]"
                  id="details"
                  placeholder={t("yukHajmi")}
                />
              </div>
            </form>
            <div className="flex items-center justify-center">
              <img
                src={contactImg}
                alt="Customer Service"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center gap-5 justify-between">
              <button
                onClick={handleClick}
                className="px-4 rounded-full py-3 bg-[#b8252a] text-white transition-colors duration-200 ease-in-out transform hover:bg-[#a71f24] active:bg-[#90181d]  active:scale-95"
              >
                {t("boglanish")}
              </button>

              <div className="flex gap-3 mt-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeFooter />
    </>
  );
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default Home;
