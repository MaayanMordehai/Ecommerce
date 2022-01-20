import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { useSelector } from 'react-redux'
import { State} from "../schemas/state.schema"
import StoreProduct from "./Product";

const Routing = () => {

    const numCart = useSelector((state : State) => state.numCart);

    console.log(numCart)
    const navOptions = 
    { 
        brand: {
            name: "Ecommerce",
            path: "/",
        },
        pages: [
            {
                name: `🛒 Cart ${numCart} Products`,
                path: "/Cart",
            },
        ]
    };

    const pages = [
        {
            name: "Ecommerce",
            path: "/",
            component: ProductsList 
        },
        {
            name: "Cart",
            path: "/Cart",
            component: Cart 
        },
        {
            name: "Product",
            path: "/Product/:id",
            component: StoreProduct
        }
    ]

  return (
    <Router>
        <MyNavbar pages={navOptions.pages} brand={navOptions.brand}/>
      <Routes>
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