// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Header from "./Components/Header";

const socket = io("http://localhost:5000");

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home socket={socket} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
