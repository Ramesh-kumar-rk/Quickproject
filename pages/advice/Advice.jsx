import { useState, useEffect } from "react";
import "./advice.css";

export default function Advice() {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchQ();
  }, []);

  async function fetchQ() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
  }
  return (
    <div className="advice-container">
      <div className="advice-text">
        <div>{advice}</div>
      </div>
    </div>
  );
}
