import React from "react";
import "./main.css";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home' ;
import About from './pages/about/About' ;
import Work from './pages/work/Work' ;




export default function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}
