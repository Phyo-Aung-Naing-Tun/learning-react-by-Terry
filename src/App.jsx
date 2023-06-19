import React from "react";
import { BrowserRouter as Rouder, Routes, Route } from "react-router-dom";
import "./Style/style.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Admin from "./components/Admin";
import Nav from "./components/Nav";
import Error from "./components/Error";
import Nest from "./components/Nest";
import One from "./Nest/One";
import Two from "./Nest/Two";
import Three from "./Nest/Three";

const App = () => {
  return (
    <Rouder>
      <Nav />
      <Routes>
        <Route path="/admin" element={<Admin />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
        <Route path="/nest" element={<Nest />}>
          <Route path="one" element={<One />} />
          <Route path="two" element={<Two />} />
          <Route path="three" element={<Three />} />
        </Route>
      </Routes>
    </Rouder>
  );
};

export default App;
