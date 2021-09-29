import React, { memo } from "react";
import { FormSignIn } from "../components/FormSignIn";
import { HeaderForm } from "../components/HeaderForm";
import { ImageSign } from "../components/ImageSign";
import { LinkSing } from "../components/LinkSing";
import { Message } from "../components/Message";
// import { UserContext } from "../services/useContext";

export const SignIn = memo(() => {
  return (
    <section className="max-w-lg sm:max-w-4xl mx-auto  flex flex-col justify-center min-h-screen">
      <div className="bg-white flex flex-col sm:flex-row shadow-sm">
        <Message />
        <ImageSign />
        <div className="w-full p-8">
          <HeaderForm state="Sing in" />
          <FormSignIn />
          <LinkSing />
        </div>
      </div>
    </section>
  );
});
