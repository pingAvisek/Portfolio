import React from "react";
import Header from "../pages/Header";
import Home from "../pages/Home";
import About from "../pages/About";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Home />
      <About />
    </>
  );
}
