import { useState } from "react";

import usd from "../image/usd.svg";
import eur from "../image/eur.svg";
import gbp from "../image/gbp.svg";
import aud from "../image/aud.svg";
import cad from "../image/cad.svg";

import "./selectCurrency.css";

const currencies = [
  {
    name: "usd",
    image: usd,
  },
  {
    name: "eur",
    image: eur,
  },
  {
    name: "gbp",
    image: gbp,
  },
  {
    name: "aud",
    image: aud,
  },
  {
    name: "cad",
    image: cad,
  },
];

const SelectCurrency = ({ setCurrency, currency, isActiveMobileMenu }) => {
  const [isActiveSelect, setIsactiveSelect] = useState(false);

  return (
    <div
      className={`select_currency ${isActiveMobileMenu && "active"}`}
      onClick={() => setIsactiveSelect(!isActiveSelect)}
    >
      <div
        className={`main_cureency ${isActiveSelect && "main_cureency-active"}`}
      >
        <img
          src={currencies.find((obj) => obj.name === currency).image}
          className={`select_image ${currency === "usd" ? "usd-currency" : ""}`}
        />
        <div>{currency.toUpperCase()}</div>
        <div
          className={`select_icon ${
            !isActiveSelect ? "select_close" : "select_open"
          }`}
        >
          {">"}
        </div>
      </div>
      <div className={!isActiveSelect ? "display_none" : "select_list"}>
        {currencies.map((obj, index) => (
          <div
          key={index}
            onClick={() => setCurrency(obj.name)}
            className={`select_list-currency ${
              obj.name === currency && "active"
            }`}
          >
            <img src={obj.image} alt="image currency"/>
            <div>{obj.name.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCurrency;
