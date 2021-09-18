import React from "react";
import { Logo } from "../icons/Logo";

export const Header = () => {
  return (
    <header className="py-6 mb-4 bg-white shadow-md w-full">
      <h1 className="w-full px-4 text-black wrapper-1000 mx-auto text-3xl font-bold ">
        <Logo heigth={20} />
      </h1>
    </header>
  );
};
