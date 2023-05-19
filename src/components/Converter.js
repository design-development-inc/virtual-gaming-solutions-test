import { useEffect, useState } from "react";

import gold from "../image/gold.svg";

import "./converter.css";

const Converter = ({ currency }) => {
  const [amountInput, setAmountInput] = useState(1);
  const [priceInput, setPriceInput] = useState(1);

  const currencyResolver = (currency) => {
    if (currency === "usd") {
      return setPriceInput(Math.round(amountInput * 10));
    }
    if (currency === "eur") {
      return setPriceInput(Math.round(amountInput * 10 * 1.08));
    }
    if (currency === "gbp") {
      return setPriceInput(Math.round(amountInput * 10 * 1.24));
    }
    if (currency === "aud") {
      return setPriceInput(Math.round(amountInput * 10 * 0.66));
    }
    if (currency === "cad") {
      return setPriceInput(Math.round(amountInput * 10 * 0.74));
    }
  };

  useEffect(() => {
    currencyResolver(currency);
  }, [amountInput, currency]);

  return (
    <div className="converter_wrapper">
      <div className="input_wrapper">
        <img src={gold} className="gold_image" alt="gold image"/>

        <label>Amount</label>
        <input
          onChange={(e) => setAmountInput(e.target.value)}
          value={amountInput}
          type="number"
          className="converter_input first_input"
        />
      </div>
      <div>
        <div className="input_wrapper">
          <label>Price</label>
          <input
            disabled
            value={priceInput}
            type="number"
            className="converter_input second_input"
          />
          <div className="input_currency">{currency.toUpperCase()}</div>
        </div>
      </div>
    </div>
  );
};
export default Converter;
