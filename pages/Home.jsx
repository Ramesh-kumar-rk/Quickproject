import { useState } from "react";
import { Link } from "react-router-dom";

import "./style/home.css";

export default function Home() {
  const [theme, setTheme] = useState(true);
  return (
    <div className={theme ? "middle" : "middle night"}>
      <Link to="/todo">todo</Link>
      <br />
      <Link to="/quotes">quotes</Link>
      <br />
      <Link to="/tip-calculator">tip</Link>
      <br />
      <Link to="/advice">advice</Link>
      <br />
      <div className="btn-conatier-for-home">
        <button
          className={theme ? "night" : ""}
          onClick={() => setTheme(theme ? !theme : true)}
        >
          setTheme
        </button>
      </div>
    </div>
  );
}
