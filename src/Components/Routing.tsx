import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";

const pages = [
  {
    name: "🛒 Cart",
    path: "/Cart",
    component: Cart,
  },
];

const brand = {
    name: "Ecommerce",
    path: "/",
    component: ProductsList 
}
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Routing = () => {
  return (
    <Router>
        <MyNavbar pages={pages} brand={brand} />
      <Routes>
        <Route
            key={brand.name}
            path={brand.path}
            element={<brand.component />}
          />
        {pages.map((page) => (
          <Route
            key={page.name}
            path={page.path}
            element={<page.component />}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;