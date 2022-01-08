import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./NavBar";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import Product from "./Product";

interface Category {
    name: string,
    subCategories: Array<string>
}

interface AdditionalInfo {
    title: string,
    info: string
}

interface Iproducts {
    id: number,
    name: string,
    uploadedDate: Date,
    price: number,
    description: string,
    category: Category,
    sellerName: string,
    additionalInfo: Array<AdditionalInfo>,
}
// static info we will usually get from server
const staticProducts = [
  {
    id: 1,
    name: "IPHONE 13 mini",
    description: "The 5.4-inch iPhone 13 mini is the successor to the iPhone 12 mini, while the 6.1-inch iPhone 13 is the replacement for the iPhone 12. Both of the new iPhone 13 models are nearly identical in design to the iPhone 12 models, featuring flat edges, an aerospace-grade aluminum enclosure, a glass back, and a slight increase in thickness (7.65mm). The iPhone 13 models are available in Pink, Blue, Midnight (black), Starlight (silver/gold), and (PRODUCT)RED.",
    price: 2000,
    uploadedDate: new Date(2021, 9, 24, 6, 4, 23, 11),
    category: {
      name: "Electronic",
      subCategories: ["Phones", "Apple"]
    },
    sellerName: "Apple LTD",
    additionalInfo: [
        {
            title: "Selfie Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "Main Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "NPC",
            info: "yes"
        },
        {
            title: "OS",
            info: "iOS 15, up to iOS 15.2"
        }
    ]
  },
  {
    id: 2,
    name: "IPHONE 12 MAX",
    description: "The 6.1-inch iPhone 12 max is the successor to the iPhone 11 max, while the 5.4-inch iPhone 12 is the replacement for the iPhone 11. Both of the new iPhone 12 models are nearly identical in design to the iPhone 11 models, featuring flat edges, an aerospace-grade aluminum enclosure, a glass back, and a slight increase in thickness (7.65mm). The iPhone 12 models are available in Pink, Blue, Midnight (black), Starlight (silver/gold), and (PRODUCT)RED.",
    price: 2000,
    uploadedDate: new Date(2021, 9, 24, 6, 4, 23, 11),
    category: {
      name: "Electronic",
      subCategories: ["Phones", "Apple"]
    },
    sellerName: "Apple LTD",
    additionalInfo: [
        {
            title: "Selfie Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "Main Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "NPC",
            info: "yes"
        },
        {
            title: "OS",
            info: "iOS 15, up to iOS 15.2"
        }
    ]
  },
  {
    id: 3,
    name: "POCOPHONE F2 PRO",
    description: "Xiaomi’s PocoPhone is expected to release the Xiaomi PocoPhone F2 soon.\n\nThe smartphone is rumored to come with a 6.67 inches AMOLED display with an in-display fingerprint reader. The screen should be protected by Gorilla Glass 6.\n\nThe smartphone is expected to feature a triple camera setup of 64MP main, 13MP ultra-wide and 8MP telephoto cameras. The front camera should be a 20MP pop-up selfie shooter.\n\nThe phone is said to come in variants such as 6 GB RAM and 8 GB with 128 GB and 256 GB internal storage.\n\nThe phone should feature MIUI V10 (Android 9.0 Pie). ",
    price: 1000,
    uploadedDate: new Date(2021, 11, 13, 6, 4, 23, 11),
    category: {
      name: "Electronic",
      subCategories: ["Phones", "Xiaomi"]
    },
    sellerName: "Xiaomi",
    additionalInfo: [
        {
            title: "Selfie Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "Main Camera",
            info: "12 MP, 4K video"
        },
        {
            title: "NPC",
            info: "yes"
        },
        {
            title: "OS",
            info: "MUMI"
        }
    ]
  }
]

const Routing = () => {
    const [ numCart, setNumCart ] = useState(0);
    const [ products, setProducts ] = useState<Array<Iproducts>>(staticProducts);

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
            element={<Product product={product}/>}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Routing;