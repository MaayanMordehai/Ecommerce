import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import ProductComp from "./Product";
import { connect } from 'react-redux'
import { State } from "../schemas/state.schema";
import { Product } from "../schemas/product.schema"

interface RoutingProps {
    products: Product[],
    numCart: Number,
    cartProducts: Product[]
}


const Routing = (props: RoutingProps) => {

    const { products, numCart, cartProducts } = props;
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
        {products.map((product) => (
          <Route
            key={product.id}
            path={`/Product/${product.id}`}
            element={<ProductComp product={product}/>}
          />
        ))}
      </Routes>
    </Router>
  );
};

const mapStateToProps = (state: State) : RoutingProps => {
  return {
    numCart: state.numCart,
    cartProducts: state.cartProducts,
    products: state.products
  };
};

export default connect(mapStateToProps)(Routing);