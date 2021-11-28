import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Portfolio from "./Portfolio/Portfolio";
import Components from "./Components/Components";

export default function Main() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="myresume" element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Components" element={<Components />} />
        </Routes>
      </Layout>
    </>
  );
}
