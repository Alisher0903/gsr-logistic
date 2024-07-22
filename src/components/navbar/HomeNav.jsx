import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home page/home.css";
import { logo1 } from "../../assets";
import { IoLockClosedOutline } from "react-icons/io5";

function HomeNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div>
      <nav className="z-50 w-full">
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
            </div>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ms-20 sm:pr-0">
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
                }}
                className="flex text-lg gap-3 rounded-full bg-red-500 p-1 text-gray-400 px-4 py-2"
              >
                <p className="block sm:hidden md:block text-white">
                  Bog'lanish
                </p>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isOpenMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700"
            >
              Kirish
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
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-gray-700"
            >
              Bog'lanish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeNav;
