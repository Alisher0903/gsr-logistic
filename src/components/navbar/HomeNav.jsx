import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home page/home.css";

import { logo1 } from "../../assets";
import { IoLockClosedOutline } from "react-icons/io5";

function HomeNav() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const openMenu = () => setIsOpenMenu(!isOpenMenu);

  const login = () => document.getElementById("login").click();
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
                  className="block h-6 w-6"
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
                  className="hidden h-6 w-6"
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
            <div className=" md:inline inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ms-20 sm:pr-0"></div>
            <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ms-20 sm:pr-0">
              <Link id="login" to="/login">
                <button
                  className="flex items-center text-lg gap-3 rounded-full p-1 text-gray-400 px-4 py-2"
                  onClick={login}
                >
                  <IoLockClosedOutline />

                  <p className="hidden md:block">Kirish</p>
                </button>
              </Link>
              <button
                className="flex text-lg gap-3 rounded-full bg-gray-800 p-1 text-gray-400 px-4 py-2 btm"
                onClick={login}
              >
                <p className="hidden md:block">Bog'lanish</p>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
