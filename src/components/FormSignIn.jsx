import React, { useContext, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LoaderIcon } from "../icons/LoaderIcon";
import { logIn } from "../services";
import { UserContext } from "../services/useContext";

export const FormSignIn = memo(() => {
  const { session, setSession } = useContext(UserContext);

  const [formValues, handeInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  useEffect(() => {
    setSession({
      log: null,
      loading: false,
      data: null,
    });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setSession({
      ...session,
      loading: true,
    });
    setTimeout(() => {
      logIn(formValues).then((resp) => {
        const [a, , c] = resp;
        if (a) {
          setSession({
            ...session,
            log: a.aud,
            loading: false,
          });
        } else {
          setSession({
            ...session,
            log: c.message,
            loading: false,
          });
        }
      });
    }, 500);
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label>
        <span className="py-2 block">Email Address</span>
        <input
          required
          type="email"
          name="email"
          className="bg-gray-100 focus:bg-white focus:ring focus:ring-amaranth-200 w-full px-4 py-2  border  rounded-md outline-none"
          placeholder="Email"
          value={email}
          onChange={handeInputChange}
        />
      </label>
      <label>
        <div className="flex justify-between items-center">
          <span className="py-2 block">Password</span>
          <Link
            to="/password_resets"
            className="text-amaranth-500 text-sm block py-2"
          >
            Forgot password?
          </Link>
        </div>
        <input
          required
          type="password"
          id="password"
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
        Sign In
      </button>
    </form>
  );
});
