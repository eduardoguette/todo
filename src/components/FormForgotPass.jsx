import React, { useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { LoaderIcon } from "../icons/LoaderIcon";
import { recoveryPassword } from "../services";
import { UserContext } from "../services/useContext";

export const FormForgotPass = () => {
  const { session, setSession } = useContext(UserContext);

  const [formValues, handeInputChange, reset] = useForm({
    email: "",
  });
  const { email } = formValues;
  useEffect(() => {
    setSession({
      log: null,
      loading: false,
      data: null,
    });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setSession({
      log: null,
      loading: true,
      data: null,
    });
    setTimeout(() => {
      recoveryPassword(formValues.email).then((resp) => {
        setSession({
          log: "If this email address was used to create an account, instructions to reset your password will be sent to you. Please check your email.",
          loading: false,
          data: null,
        });
      });
      reset();
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="email" className="text-left font-bold">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="focus:ring focus:ring-gray-200 w-full px-4 py-2  border border-midnight-500 rounded-md shadow-md outline-none"
        placeholder="Email"
        value={email}
        onChange={handeInputChange}
      />
      <button
        type="submit"
        className="bg-amaranth-500 px-2 py-2 flex items-center justify-center gap-3 my-4 font-semibold rounded-md text-white"
      >
        {session.loading && <LoaderIcon />}
        Send Reset Instruccions
      </button>
    </form>
  );
};
