import axios from "axios";
import React from "react";
import QuoteCard from "./components/QuoteCard";
import { useState } from "react";

const startQuote = [
  {
    quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    character: "Homer Simpson",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection: "Right"
  }
];

function App() {

  const [quote, setQuote] = useState(startQuote);

 const handleClick = () => {
    axios
    .get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(res => res.data)
    .then(data => setQuote(data))
  };

return (
    <div className="App">
      <QuoteCard {...quote[0]}/>
      <button type="button" onClick={handleClick}>New Quote</button>
    </div>
  );
};

export default App;
