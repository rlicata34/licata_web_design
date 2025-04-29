// import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import "../blocks/App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  );
}

export default App;
