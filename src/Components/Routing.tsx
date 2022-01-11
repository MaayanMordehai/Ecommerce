import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import staticProducts from "../Data/index"
import ProductComp from "./Product";
import { useSelector} from 'react-redux'


interface Category {
    name: string,
    subCategories: Array<string>
}

interface AdditionalInfo {
    title: string,
    info: string
}

interface Product {
    id: number,
    name: string,
    imageurl: string,
    uploadedDate: Date,
    price: number,
    amount: number,
    description: string,
    category: Category,
    sellerName: string,
    additionalInfo: Array<AdditionalInfo>,
}
// static info we will usually get from server

const Routing = () => {
    const numCart = 0;
    const [ products, setProducts ] = useState<Array<Product>>(staticProducts);

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
        <MyNavbar pages={navOptions.pages} brand={navOptions.brand} />
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

export default Routing;