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
  contact,
  container,
  container1,
  container2,
  container3,
  container4,
  container5,
} from "../../assets";
import "./home.css";
import HomeFooter from "./HomeFooter";
import HomeNav from "../navbar/HomeNav";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";
import { config, url } from "../api";

const images = [asset1, asset2, asset3, asset4, asset5, asset6, asset7, asset8];

const data = [
  {
    name: "John Carter",
    subTitle: "CEO & Co-Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fgnWkMiT7CvGFswpZ3MrN-I5FAZ9vRySO4aqlXyGPqqwNNvoAGKuZqIRBbyudYDmApY&usqp=CAU",
  },
  {
    name: "Sophie Moore",
    subTitle: "CEO & Co-Founder",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCicxernIb5W2jIRbjKwiMOVIit_7XJtczA&s",
  },
  {
    name: "Matt Cannon",
    subTitle: "VP of Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwswSRFJi2lmHPRJPCrlYM0nmsmHUaTBALcQ&s",
  },
  {
    name: "Andy Smith",
    subTitle: "VP of Product",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&s",
  },
  {
    name: "Lily Woods",
    subTitle: "VP of Product",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAgEAyDkw2k2XsoJFX9k44m1YA_pcw2cskIA&s",
  },
  {
    name: "Patrick Meyer",
    subTitle: "VP of Product",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48kgQNS7jHuRO0_X6Qv5PCh-chkE0_E8uRA&s",
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
      toast.error(error.message);
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
      toast.error(error.message);
      setResultData(null);
    }
  };

  return (
    <>
      <div
        className="w-full z-[10000]"
        style={{ backgroundImage: `url(${container})` }}
      >
        <HomeNav changeLang={changeLang} />
        <div className="flex items-center flex-wrap justify-center min-h-screen bg-cover gap-10 bg-center">
          <div className="flex flex-col items-start p-8 space-y-4 text-white max-w-md">
            <h1 className="text-4xl font-bold">Xitoy biz bilan bir qadam.</h1>
            <p>
              QSR Logistics jamoamiz 10 yil davomida mijozlarga to'xtovsiz
              sifatli xizmat ko'rsatib kelishmoqda.
            </p>
            <ul className="space-y-2">
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
                Istalgan turdagi yuklaringizni topamiz.
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
                Hatt hujjatlar hamda savdo tartiblarida ko'maklashamiz.
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
                Yuklaringiz to'liq kafolatlangan holda keladi.
              </li>
            </ul>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-lg max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="volume">
                  Yuk o'lchami
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, kub: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="volume"
                  placeholder="m3"
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="weight">
                  Og'irligi
                </label>
                <input
                  onChange={(e) => setResult({ ...result, kg: e.target.value })}
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="weight"
                  placeholder="kg"
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="from">
                  Qayerdan
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, where: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="from"
                  placeholder="Yiwu"
                />
              </div>
              <div className="space-y-2">
                <label className="font-semibold" htmlFor="to">
                  Qayerga
                </label>
                <input
                  onChange={(e) =>
                    setResult({ ...result, whereTo: e.target.value })
                  }
                  className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                  id="to"
                  placeholder="Tashkent"
                />
              </div>
              <div className="flex gap-10 items-center">
                <div className="col-span-2 flex flex-col space-y-2">
                  <label className="font-semibold" htmlFor="type">
                    Yuk turi
                  </label>
                  <input
                    onChange={(e) =>
                      setResult({ ...result, typerCargo: e.target.value })
                    }
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="type"
                    placeholder="Xo'jalik mollari"
                  />
                </div>
                <h1 className="text-xl mt-7">
                  {resultData ? `$${resultData}` : ""}
                </h1>
              </div>
            </div>
            <button
              onClick={getResult}
              className="w-full rounded-full py-2 mt-4 bg-red-500 text-white"
            >
              Yukni hisoblash
            </button>
          </div>
        </div>
      </div>
      <div className="w-full pt-20 overflow-x-hidden">
        {/* first section */}
        {/* end section */}

        {/* start second section */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-red-600 uppercase">
              Kompaniyamiz haqida
            </h2>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              Mijozlarimizning g‘alabasi biz uchun muhim
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
          <button className="mt-8 bg-red-600 text-white rounded-full px-6 py-2">
            Bog‘lanish
          </button>
        </div>
        {/* end third section */}

        {/* start forth section */}
        <div className="w-full flex justify-center items-center gap-5 mt-10 flex-col">
          <h1 className="text-xl font-semibold">Logistika xizmat turlari</h1>
          <p>Logistika turi yukning davlati, masofasiga qarab o’zgaradi</p>
          <div className="flex gap-5 my-5 flex-wrap">
            <img src={container2} alt="" />
            <div className="flex flex-col gap-5 flex-wrap">
              <img src={container3} alt="" />
              <img src={container4} alt="" />
            </div>
          </div>
        </div>
        {/* end fourth section */}
        {/* start five section */}
        <div class="text-center py-20 border-y my-10">
          <h2 class="text-3xl font-bold mb-4">Yutuqlarimiz</h2>
          <p class="text-lg mb-12">
            10 yil davomida biz erishgan raqamlar bilan tanishing
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <span class="text-5xl font-bold text-red-600">80%</span>
              <p class="text-lg mt-2">4 yildan ortiq hamkorlik qilayotgan</p>
            </div>
            <div class="text-center">
              <span class="text-5xl font-bold">3.200+</span>
              <p class="text-lg mt-2">Keltirilgan yuklar</p>
            </div>
            <div class="text-center">
              <span class="text-5xl font-bold">125+</span>
              <p class="text-lg mt-2">Keltirilgan butun yuk (fura/konteyner)</p>
            </div>
            <div class="text-center">
              <span class="text-5xl font-bold">14 kun</span>
              <p class="text-lg mt-2">O'rtacha kirish muddati</p>
            </div>
          </div>
        </div>
        {/* end five section */}
        {/* six section */}
        <div className="flex flex-col items-center justify-center w-full min-h-screen p-4">
          <div className="w-full bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-2">Mijozlarimiz fikri</h2>
            <p className="text-muted-foreground mb-6">
              GSR Logistics kompaniyasining doimiy mijozlarining kompaniyamizga
              bo'lgan ishonchi - bu bizning yutug'imiz.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <img
                src={container5}
                alt="Customer"
                className="w-full md:w-2/6 h-96 rounded-lg"
              />
              <div className="w-full md:w-1/2 h-96 flex flex-col justify-center bg-gray-50 p-6 rounded-lg">
                <p className="text-xl font-semibold mb-4">
                  “Sifatli xizmat va tezkorlik”
                </p>
                <p className="text-muted-foreground mb-4">
                  Gsr Logistics kompaniyasi Xitoydan topishdan tashqari to
                  toshkenda qo'limizga kelib tushmunga, har bir bosqichda fizni
                  foydamizni o'ylab ish yuritishadi, shu sababdan doim
                  ishonamiz.
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
        <div className="bg-[#fcfcfc] p-4 py-10 my-10">
          <div className="flex flex-wrap gap-5 w-full px-20 justify-between">
            <div>
              <h3 className="text-2xl font-bold">Hamkorlarimiz </h3>
              <h4 className="text-2xl font-bold">1000+</h4>
            </div>
            <div>
              <p className="text-[#b8252a] text-lg">Hamkorlar</p>
              <p className="text-sm text-[#a3a3a3]">
                Biz va mijoz o’rtasidagi kelishuv havfsizligi <br />
                ta’minlanadi
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
        <div className="my-10 w-full flex flex-col justify-center">
          <div>
            <h1 className="text-3xl font-bold text-center">
              Xitoy va O’zbekiston bo’ylab jamoalarimiz
            </h1>
            <div className="w-2/6 mx-auto mt-6">
              <p className="text-center">
                Har bir jamoa vakili o’ziga yarasha kuch va bilimga ega.
                Mijozlarimiz bilan kompaniyamiz o’rtasidagi munosabatlarni
                mustaxkamligi jamoaning har bir a’zosining mexnat natijasidur.
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
            ))}
          </div>
        </div>
        {/* eight */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white">
          <h1 className="text-4xl font-bold text-center">
            Baxtli mijozlardan biri bo’ling
          </h1>
          <p className="mt-2 text-center text-muted-foreground">
            Ma'lumotlarni to'ldiring va baxtli mijozlar qatoriga qo'shiling.
          </p>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            <form className="space-y-4">
              <div className="flex gap-5">
                <div className="space-y-2 flex flex-col">
                  <label className="font-bold" htmlFor="name">
                    Ismingiz
                  </label>
                  <input
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="name"
                    placeholder="Xojiakbar"
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
                    Faoliyatingiz
                  </label>
                  <input
                    onChange={(e) =>
                      setContact({ ...contact, activity: e.target.value })
                    }
                    className="outline-none rounded-full p-3 w-44 bg-[#f2f2f2]"
                    id="activity"
                    placeholder="Biznes"
                  />
                </div>
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="font-bold" htmlFor="phone">
                  Phone
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
                  Yukingiz haqida qo’shimcha ma’lumotlar
                </label>
                <textarea
                  onChange={(e) =>
                    setContact({ ...contact, description: e.target.value })
                  }
                  className="outline-none rounded-xl p-3 w-full h-32 bg-[#f2f2f2]"
                  id="details"
                  placeholder="Yuk hajmi 200 kg 3 kub atrofida"
                />
              </div>
            </form>
            <div className="flex items-center justify-center">
              <img
                src={contact}
                alt="Customer Service"
                className="rounded-lg"
              />
            </div>
            <div className="flex items-center gap-5 justify-between">
              <button
                onClick={handleClick}
                className="w-20 rounded-full py-2 bg-red-600 text-white"
              >
                Yuborish
              </button>
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