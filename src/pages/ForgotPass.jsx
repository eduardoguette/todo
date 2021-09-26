import React from "react";
import { FormForgotPass } from "../components/FormForgotPass";
import { Message } from "../components/Message";

export const ForgotPass = () => {
  return (
    <section className="max-w-lg sm:max-w-4xl mx-auto  flex flex-col justify-center min-h-screen">
      <div className="bg-white flex flex-col sm:flex-row shadow-sm">
        <Message state={true} />
        <div className="w-full p-8">
          <img src="/img/logo.png" height="30" width="115" alt="Logo" />

          <h1 className="font-bold text-2xl my-2">Forgot Password?</h1>
          <p className="text-gray-600 mb-2">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
          <p className="text-gray-600 mb-2">
            For security reasons, we do NOT store your password. So rest assured
            that we will never send your password via email.
          </p>
          <FormForgotPass />
        </div>
      </div>
    </section>
  );
};
