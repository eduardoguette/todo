import React, { useContext } from "react";
import { UserContext } from "../services/useContext";

export const Message = ({ state }) => {
  const { session } = useContext(UserContext);

  return (
    <>
      {session.log && (
        <div
          className={
            state
              ? "animate__animated w-full left-0 animate__slideInDown bg-green-300 text-sm text-center text-black absolute top-0 py-2 px-2"
              : "animate__animated w-full left-0 animate__slideInDown bg-red-300 text-sm text-center text-black absolute top-0 py-2 px-2"
          }
        >
          {session.log}
        </div>
      )}
    </>
  );
};
