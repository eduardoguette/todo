import React from "react";
import { Link } from "react-router-dom";

import { FormSignUp } from "../components/FormSignUp";
import { HeaderForm } from "../components/HeaderForm";
import { ImageSign } from "../components/ImageSign";
import { Message } from "../components/Message";

export const SignUp = () => {
  return (
    <section className="max-w-lg sm:max-w-4xl mx-auto  flex flex-col justify-center min-h-screen">
      <div className="bg-white flex flex-col sm:flex-row shadow-sm">
        <Message state="true"/>
        <ImageSign />
        <div className="w-full p-8">
          <HeaderForm state="Sing up" />
          <FormSignUp />
          <p className="flex items-center justify-center gap-1">
            Already a member?
            <Link
              to="/signin"
              className="block py-2 rounded-md text-amaranth-500"
            >
              Sing in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};
