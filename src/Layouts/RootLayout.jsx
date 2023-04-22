import React from "react";
import HeaderLayout from "./HeaderLayout";
import SideLayout from "./SideLayout";
import MainLayout from "./MainLayout";

export default function RootLayout() {
  return (
    <>
      <HeaderLayout />
      <div className="main-container grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
        <SideLayout />
        <MainLayout />
      </div>
    </>
  );
}
