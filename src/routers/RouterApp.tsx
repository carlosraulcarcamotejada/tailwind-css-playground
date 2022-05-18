import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../componentes/Tailwind Labs/NavBar";
import About from "../componentes/Pages/About";
import Css from "../componentes/Pages/Css";
import Tailwind from "../componentes/Pages/Tailwind";


const RouterApp = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Css />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
