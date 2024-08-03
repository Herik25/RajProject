import { useState } from "react";
import Navbar from "./components/Navbar/Index"
import Hero from './components/Hero/Index'
import DownloadBanner from './components/DownloadBanner/Index'
import About from './components/About/Index'
import "./App.css";
import Featured from "./components/Featured/Index";
import Cards from "./components/Cards/Index";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DownloadBanner />
      <About />
      <Featured />
      <Cards />
    </div>
  );
}

export default App;
