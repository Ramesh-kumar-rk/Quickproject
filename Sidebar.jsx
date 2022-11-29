import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import "./sidebar.css";

export default function Siddebar() {
  const [toggle, setToggle] = useState(false);

  const change = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <div className="come-from-side">
          <div className="fix-all-content">
            <div className="close-btn">
              <NavLink>
                <span onClick={change}>X</span>
              </NavLink>
            </div>
            <div className="contentOfSidebar">
              <NavLink to="/todo">Todo</NavLink>
            </div>
            <div className="contentOfSidebar">
              <NavLink to="/quotes">Quotes</NavLink>
            </div>
            <div className="contentOfSidebar">
              <NavLink to="/tip-calculator">Tip-calculator</NavLink>
            </div>

            <div className="contentOfSidebar">
              <NavLink to="/advice">Advice</NavLink>
            </div>
          </div>
        </div>
      ) : (
        <span className="icon-sidebar">
          {" "}
          <GiHamburgerMenu onClick={change} />
        </span>
      )}
    </>
  );
}
