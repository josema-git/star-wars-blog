import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light px-4 py-2 navbar-edit border-gradient justify-content-center">
      <Link to="/" className="d-flex justify-content-center">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          width={"150px"}
        />
      </Link>
    </nav>
  );
};
