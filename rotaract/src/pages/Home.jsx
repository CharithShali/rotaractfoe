import React from "react";

import { Footer, Blog, Possibility, Features, whatRotaract, Header } from "../containers";
import { CTA, Brand, Navbar } from "../components";
import "../App.css";

function Home() {
  return (
    <div className="h-screen gradient_bg">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <whatRotaract />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
