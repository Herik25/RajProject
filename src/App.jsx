import { useState } from "react";
import Navbar from "./components/Navbar/Index"
import Hero from './components/Hero/Index'
import DownloadBanner from './components/DownloadBanner/Index'
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DownloadBanner />
    </div>
  );
}

export default App;
