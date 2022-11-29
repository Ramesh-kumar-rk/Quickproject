import { Link } from "react-router-dom";
import { AiFillBug } from "react-icons/ai";
import Sidebar from "./Sidebar";
import "./header.css";
export default function Header() {
  return (
    <div className="head">
      <h1>
        <Sidebar />

        <Link to="/" className="not-active">
          {" "}
          <AiFillBug />
          <span className="head-title"> Mega</span>
        </Link>
      </h1>

      <Link to="/" className="home-name">
        Home
      </Link>
    </div>
  );
}
