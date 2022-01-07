import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";


const Routing = () => {
    const [ numCart, setNumCart ] = useState(0);

    const pages = [
    {
        name: `🛒 Cart ${numCart} Products`,
        path: "/Cart",
        component: Cart,
    },
    ];

    const brand = {
        name: "Ecommerce",
        path: "/",
        component: ProductsList 
    }

  return (
    <Router>
        <MyNavbar pages={pages} brand={brand} />
      <Routes>
        <Route
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