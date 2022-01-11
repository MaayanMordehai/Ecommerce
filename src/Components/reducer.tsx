import { Reducer } from "@reduxjs/toolkit";
import staticProducts from "../Data/index"


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
    description: string,
    amount: number,
    category: Category,
    sellerName: string,
    additionalInfo: Array<AdditionalInfo>,
}


interface State {
    numCart: number,
    cartProducts: Array<Product>,
    products: Array<Product>,
  }

const addToCart = (state: State, product: Product) => {
    const newProductsList = [...state.products];
    const newProduct = {...product};
    newProduct.amount = product.amount -1;
    newProductsList[newProductsList.indexOf(product)] = newProduct;
    const newCartProducts = [...state.cartProducts];
    newCartProducts.push(newProduct);
    return {
        products: newProductsList,
        cartProducts: newCartProducts,
        numCart: state.numCart+1
    }
}

const removeFromCart = (state: State, product: Product) => {
    const newProductsList = [...state.products];
    const newProduct = {...product};
    newProduct.amount = product.amount + 1;
    newProductsList[newProductsList.indexOf(product)] = newProduct;
    const newCartProducts = [...state.cartProducts];
    newCartProducts.splice(newCartProducts.indexOf(product),1);
    return {
        products: newProductsList,
        cartProducts: newCartProducts,
        numCart: state.numCart+1
    }
}

//TODO: FIX REDUCER TYPES

interface  appAction{
    name: string
    product: Product
}

interface ActionOptions {
    [key: string]: Function
}
const actionsOptions : ActionOptions = {
    ADD_TO_CART: addToCart,
    REMOVE_FROM_CART: removeFromCart,
}

const initialState: State = {
    numCart: 0,
    cartProducts: staticProducts,
    products: [],
}

const cartReducer = (state : State | undefined = initialState, action : any):State => {
    if (action.name in Object.keys(actionsOptions)) {
        return actionsOptions[action.name](state, action.product);
    }
    console.log("Unsupported actions");
    return state;
}


export default cartReducer