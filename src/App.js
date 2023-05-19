import { useState } from "react";
import Header from "./components/Header";
import Converter from "./components/Converter";
import "./index.css"

function App() {
  const [currency, setCurrency] = useState("usd")
  return (
    <div className="app">
     <Header currency={currency} setCurrency={setCurrency}/>
     <Converter currency={currency}/>
    </div>
  );
}

export default App;
