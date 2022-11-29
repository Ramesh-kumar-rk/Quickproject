import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quotes from "./pages/quotes/Quotes";
import Tip from "./pages/Tip/Tip";
import Todo from "./pages/Todo/Todo";
import Advice from "./pages/advice/Advice";

export default function R() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/tip-calculator" element={<Tip />} />
        <Route path="/advice" element={<Advice />} />
      </Routes>
    </div>
  );
}
