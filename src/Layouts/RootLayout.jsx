import React from "react";
import HeaderLayout from "../pages/Header";
import Home from "../pages/Home";

export default function RootLayout() {
  return (
    <>
      <HeaderLayout />
      <Home />
    </>
  );
}
