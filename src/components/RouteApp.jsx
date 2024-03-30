import React from "react";
import { Route, Routes } from "react-router-dom";
import ListProducts from "./ListProducts";
import SingleProduct from "./SingleProduct";

const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<ListProducts />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default RouteApp;
