import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <div className="min-h-80">
        <h1 className="text-center text-red-600 font-bold text-4xl mt-10">404</h1>
        <p className="text-center text-red-600 font-bold text-4xl mb-10">
          Page not Found
        </p>
        <button
          onClick={handleBack}
          className="btn bg-purple-600 ml-20 mb-10 text-white"
        >
          Go Home
        </button>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ErrorPage;
