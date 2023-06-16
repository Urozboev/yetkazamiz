import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import ProductInfo from "./components/pages/productInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
