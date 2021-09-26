import React from "react";

import { Link } from "react-router-dom";

export const LinkSing = () => {
  return (
    <p className="flex items-center justify-center gap-1">
      Not a member?
      <Link to="/signup" className="block py-2 rounded-md text-amaranth-500">
        Sing up now
      </Link>
    </p>
  );
};
