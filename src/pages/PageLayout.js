import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PageLayout() {
  return (
    <>
      <Navbar/>
      <section className="container mx-auto my-24">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default PageLayout;
