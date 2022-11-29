import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import R from "./Routes";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <R />
      </BrowserRouter>
      <Footer />
    </>
  );
}
