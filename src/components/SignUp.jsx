import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { signUp } from "../services";

export const SignUp = () => {
  const [formValues, handeInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {}, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(formValues);
    signUp(formValues).then((resp) => {
      console.log(resp);
    });
    reset();
  };
  return (
    <section className="w-full min-h-screen flex justify-center  pt-20 bg-midnight-500">
      <div className="wrapper-1000 mx-auto">
        <div className="w-1/2 hidden md:block"></div>
        <div className="wrapper-1000 sm:w-96 mx-auto shadow-xl rounded-md bg-white py-10 px-2 text-center">
          <h1 className="font-bold text-2xl sm:text-4xl">Create account</h1>
          <p className="text-sm mt-1 mb-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-midnight-300 underline">
              Sing in
            </Link>
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full mx-auto flex flex-col gap-4 p-3 text-center"
          >
            <input
              type="text"
              name="name"
              className="focus:ring focus:ring-gray-200 w-full px-4 py-2  border border-midnight-500 rounded-md shadow-md outline-none"
              placeholder="Name"
              value={name}
              onChange={handeInputChange}
            />
            <input
              type="email"
              name="email"
              className="focus:ring focus:ring-gray-200 w-full px-4 py-2  border border-midnight-500 rounded-md shadow-md outline-none"
              placeholder="Email"
              value={email}
              onChange={handeInputChange}
            />
            <input
              type="password"
              name="password"
              className="focus:ring focus:ring-gray-200 w-full px-4 py-2  border border-midnight-500 rounded-md shadow-md outline-none"
              placeholder="Password"
              value={password}
              onChange={handeInputChange}
            />
            <button
              type="submit"
              className="bg-purple-500 px-2 py-2 rounded-md text-white"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
