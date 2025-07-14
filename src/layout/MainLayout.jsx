import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="align-elements mt-10 ">
        <Outlet />
      </div>
      footer
    </>
  );
}

export default MainLayout;
