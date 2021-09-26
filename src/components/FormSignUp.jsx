import React, { useContext, useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { LoaderIcon } from "../icons/LoaderIcon";
import { signUp } from "../services";
import { UserContext } from "../services/useContext";

export const FormSignUp = () => {
  const { session, setSession } = useContext(UserContext);

  const [formValues, handeInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

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
      signUp(formValues).then((resp) => {
        const [a, , c] = resp;
        if (!a) {
          setSession({
            log: c.message,
            loading: false,
            data: null,
          });
          window.scrollTo(0,0)
          return;
        }
        reset();
      });
    }, 1000);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label>
        <span className="py-2 block">Name</span>
        <input
          type="text"
          name="name"
          className="bg-gray-100 focus:bg-white focus:ring focus:ring-amaranth-200 w-full px-4 py-2  border  rounded-md outline-none"
          placeholder="Name"
          value={name}
          onChange={handeInputChange}
        />
      </label>
      <label>
        <span className="py-2 block">Email</span>
        <input
          type="email"
          name="email"
          className="bg-gray-100 focus:bg-white focus:ring focus:ring-amaranth-200 w-full px-4 py-2  border  rounded-md outline-none"
          placeholder="Email"
          value={email}
          onChange={handeInputChange}
        />
      </label>
      <label>
        <span className="py-2 block">Password</span>
        <input
          type="password"
          name="password"
          className="bg-gray-100 focus:bg-white focus:ring focus:ring-amaranth-200 w-full px-4 py-2  border  rounded-md outline-none"
          placeholder="Password"
          value={password}
          onChange={handeInputChange}
        />
      </label>
      <button
        type="submit"
        className="bg-amaranth-500 px-2 py-2 flex items-center justify-center gap-3 my-4 font-semibold rounded-md text-white"
      >
        {session.loading && <LoaderIcon />}
        Create Account
      </button>
    </form>
  );
};
