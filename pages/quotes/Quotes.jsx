import React from "react";
import { useState, useEffect } from "react";
import "./quotes.css";

var colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#f44336",
  "#ff0000",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
  "	#ffd966",
  "#2000e1",
  "#6428e1",
  "#ffaf28",
  "#e10028",
  "#000000"
];

const Quotes = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchQ();
  }, []);

  async function fetchQ() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();

    setText(data.content);
    setAuthor(data.author);
    document.getElementById("body").style.backgroundColor =
      colors[parseInt(Math.random() * 10)];
  }

  return (
    <div className="quotes-conatiner" id="body">
      <div className="quote-box">
        <div className="quote-text">{text}</div>
        <div className="quote-author">{author}</div>
        <div className="button-container">
          <button className="button" onClick={fetchQ}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
