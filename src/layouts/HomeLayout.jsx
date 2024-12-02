import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Welcome from "../components/Welcome";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header className="w-12/12 mx-auto mb-5">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </header>
      <main className="w-11/12 mx-auto mb-5">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
