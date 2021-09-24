import React, { useState } from "react";
import { Logo } from "../icons/Logo";
import { Link } from "react-router-dom";
import { singOut } from "../services";
export const Header = ({ session }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleSignOut = () => {
    singOut().then((resp) => {
      console.log(resp);
    });
  };
  return (
    <header className="flex items-center px-10 py-6 mb-4 bg-white shadow-md w-full ">
      <h1 className="w-full text-black wrapper-1000 mx-auto text-3xl font-bold relative z-30">
        <Link to="/">
          <Logo heigth={20} />
        </Link>
      </h1>
      <button
        className="md:hidden relative z-30"
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 align-middle"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      {showMenu ? (
        <>
          <div
            className="inset-0 fixed z-10 bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm  md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          ></div>
          <div className="absolute flex flex-col items-center left-0 md:hidden z-30 shadow-xl top-18 right-0 w-80 mx-auto bg-white sm:w-96 rounded-md px-10 py-8 border" onClick={() => setShowMenu(!showMenu)}>
            <ul className="w-full flex flex-col items-center gap-y-3 md:flex-row md:py-0 px-10 md:px-0">
              {session && (
                <li className="w-full md:w-max">
                  <Link
                    className="block w-full m-auto text-center px-3 text-black py-1 rounded-md"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li className="w-full md:w-max">
                <Link
                  className="block w-full text-center m-auto px-3 text-black py-1 rounded-md"
                  to="/signin"
                  onClick={handleSignOut}
                >
                  Sign In
                </Link>
              </li>
              <li className="w-full md:w-max">
                <Link
                  className="block w-full text-center m-auto bg-amaranth-400 px-3 text-white py-2 rounded-md font-bold"
                  to="/"
                  onClick={handleSignOut}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <ul className="hidden w-full md:flex flex-col justify-end items-center gap-5 md:flex-row pb-4 pt-2 md:py-0 ml-auto">
          {session && (
            <li className="w-full md:w-max">
              <Link
                className="block w-full m-auto text-center px-3 text-black py-1 rounded-md"
                to="/profile"
              >
                Profile
              </Link>
            </li>
          )}
          <li className="w-full md:w-max">
            <Link
              className="block w-full text-center m-auto px-3 text-black py-1 rounded-md"
              to="/signin"
              onClick={handleSignOut}
            >
              Sign In
            </Link>
          </li>
          <li className="w-full md:w-max">
            <Link
              className="block w-full text-center m-auto bg-white px-3 text-black py-2 rounded-md font-bold"
              to="/"
              onClick={handleSignOut}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};
