import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home page/home.css";
import { logo1 } from "../../assets";
import  uzb  from "../../assets/uz.png";
import rus from "../../assets/ru.png";
import eng from "../../assets/eng.png";
import { IoLockClosedOutline } from "react-icons/io5";
import { t } from "i18next";
import { changeLanguage } from "../../App";
import { languageStore } from "../../locale/languageStore";

function HomeNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const { setSelectedLanguage } = languageStore();

  const openMenu = () => setIsOpenMenu(!isOpenMenu);
  const toggleAccordion = () => setIsAccordionOpen(!isAccordionOpen);

  const navItem = [
    {
      label: `${t("boshsahifa")}`,
      navigate: "home",
    },
    {
      label: `${t("bizhaqimizda")}`,
      navigate: "about",
    },
    {
      label: `${t("hamkorlarimiz")}`,
      navigate: "hamkorlar",
    },
    {
      label: `${t("Hodimlar")}`,
      navigate: "hodimlar",
    },
  ];

  const navigateItem = (id) => {
    setActiveItem(id);
    const contactSection = document.getElementById(id);
    const topOffset =
      contactSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
    setIsOpenMenu(false);
  };

  return (
    <div>
      <nav className="top-0 w-full">
        <div className="mx-auto sm:px-6 lg:px-10">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={openMenu}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpenMenu ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isOpenMenu ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-10 w-auto hidden sm:inline"
                  src={logo1}
                  alt="Your Company"
                />
              </div>
              <div className="hidden text-center sm:flex sm:ml-6 sm:space-x-10">
                {navItem.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => navigateItem(item.navigate)}
                    className={`${
                      activeItem === item.navigate
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-white"
                    } hover:border-gray-900 transition duration-150 ease-out hover:ease-in px-6 py-2 rounded-md text-sm font-bold`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to="/login"
                className="px-3 py-2 flex items-center gap-3 rounded-md text-base font-medium text-white"
              >
                <IoLockClosedOutline />
                {t("Kirish")}
              </Link>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  const topOffset =
                    contactSection.getBoundingClientRect().top +
                    window.pageYOffset;
                  window.scrollTo({
                    top: topOffset,
                    behavior: "smooth",
                  });
                  setActiveItem("contact");
                }}
                className="flex text-lg gap-3 rounded-full bg-red-500 p-1 text-gray-400 px-4 py-2"
              >
                <p className="block sm:hidden md:block text-white">
                  {t("boglanish")}
                </p>
              </button>
            </div>
            <div className="relative ml-4">
              <button
                onClick={toggleAccordion}
                className="flex text-lg gap-3 rounded-full w-full text-white px-10 py-2"
              >
                <p>{t("Language")}</p>
              </button>
              {isAccordionOpen && (
                <div className="absolute right-0 mt-2 w-30 bg-white rounded-md shadow-lg z-20">
                  <button
                    onClick={() => {
                      changeLanguage("uz", setSelectedLanguage);
                      toggleAccordion();
                    }}
                    className="block w-full  text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
                  >
                    <img
                      className="h-10 w-auto hidden sm:inline"
                      src={uzb}
                      alt="Your Company"
                    /> UZ
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("ru", setSelectedLanguage);
                      toggleAccordion();
                    }}
                    className="block w-full text-left px-2 py-2 text-gray-700 hover:bg-gray-100"
                  >
                   <img
                      className="h-10 w-auto hidden sm:inline"
                      src={rus}
                      alt="Your Company"
                    />RU
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("en", setSelectedLanguage);
                      toggleAccordion();
                    }}
                     className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100"
                  >
                   <img
                      className="h-12 w-auto hidden sm:inline"
                      src={eng}
                      alt="Your Company"
                    />EN
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {isOpenMenu && (
        <div className="fixed inset-0 z-40 bg-gray-800 bg-opacity-75">
          <div className="fixed inset-y-0 left-0 flex flex-col bg-white w-64 p-4 z-50">
            <button
              type="button"
              onClick={openMenu}
              className="self-end p-2"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="mt-4">
              {navItem.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigateItem(item.navigate)}
                  className={`${
                    activeItem === item.navigate
                      ? "text-blue-500 bg-gray-200"
                      : "text-gray-900"
                  } block px-4 py-2 mt-2 text-sm font-medium rounded-lg hover:bg-gray-300 w-full`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeNav;
