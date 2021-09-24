import React, { useState } from "react";
import { deleteUser } from "../services";

export const ProfileUser = ({ session }) => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const idUser = session?.user.id;

  const [resp, setResp] = useState("");
  const handleDeleteProfile = () => {
    console.log(supabaseUrl, idUser);
    deleteUser(idUser, supabaseUrl).then((resp) => {
      const [{ message }] = resp;
      setResp(message);
    });
  };
  return (
    <>
      <h1>Profile</h1>

      <button onClick={handleDeleteProfile}>Delete User</button>
      {<p>{resp}</p>}
    </>
  );
};
