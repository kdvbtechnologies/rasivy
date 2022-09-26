import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import "./darkmode.css";
import Conditions from "./Pages/Conditions";
import Mentions from "./Pages/Mentions";
import Politique from "./Pages/Politique";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/politique" element={<Politique />} />
      </Routes>
    </BrowserRouter>
  );
}
