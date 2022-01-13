import { Reducer } from "@reduxjs/toolkit";
import staticProducts from "../Data/index"
import { State } from "../schemas/state.schema";
import { Product } from "../schemas/product.schema";


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
        numCart: state.numCart-1
    }
}

interface ActionOptions {
    [key: string]: Function
}

const actionsOptions : ActionOptions = {
    "ADD_TO_CART": addToCart,
    "REMOVE_FROM_CART": removeFromCart,
}

const initialState: State = {
    numCart: 0,
    cartProducts: [],
    products: staticProducts,
}

const cartReducer = (state : State | undefined = initialState, action : any):State => {
    if (Object.keys(actionsOptions).includes(action.type)) {
        return actionsOptions[action.type](state, action.product);
    }
    console.log(actionsOptions)
    console.log("Unsupported actions");
    console.log(action);
    return state;
}


export default cartReducer