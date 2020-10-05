import React from "react";

import "./Header.css";

import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import LanguageSharpIcon from "@material-ui/icons/LanguageSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchSharpIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageSharpIcon />
        <ExpandMoreSharpIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
