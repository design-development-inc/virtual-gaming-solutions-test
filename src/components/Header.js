import React, { useState } from "react";
import logo from "../image/logo.png";
import SelectCurrency from "./SelectCurrency";

import "./header.css";

const links = [
  {
    name: "OSRS Gold",
    id: 0,
  },
  {
    name: "RS3 Gold",
    id: 1,
  },
  {
    name: "Sell RS Gold",
    id: 2,
  },
  {
    name: "OSRS Items",
    id: 3,
  },
  {
    name: "OSRS Accounts",
    id: 4,
  },
  ,
  {
    name: "Reward Chests",
    id: 5,
  },
];

const Header = ({ currency, setCurrency }) => {
  const [isActiveLink, setIsActiveLink] = useState(0);
  const [isActiveMobileMenu, setIsActiveMobileMenu] = useState(false);

  return (
    <div className={`header_wrapper ${isActiveMobileMenu && "active"}`}>
      <div
        onClick={() => setIsActiveMobileMenu(!isActiveMobileMenu)}
        className="mobile_nav"
      >
        <span className="toggler-icon top-bar" />
        <span className="toggler-icon middle-bar" />
        <span className="toggler-icon bottom-bar" />
      </div>
      <div>
        <img src={logo} className="header_logo" alt="header logo"/>
      </div>
      <ul className="links_wrapper">
        {links.map((link, index) => (
          <li
          key={index}
            onClick={() => setIsActiveLink(index)}
            className={`header_link ${isActiveLink === index && "active_link"}`}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <SelectCurrency
        currency={currency}
        setCurrency={setCurrency}
        isActiveMobileMenu={isActiveMobileMenu}
      />
      <div className="login_wrapper">
        <div className="sign_up">Sign Up</div>
        <div className="login">Log In</div>
      </div>
    </div>
  );
};
export default Header;
