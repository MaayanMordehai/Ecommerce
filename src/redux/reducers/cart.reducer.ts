import staticProducts from "../../Data/index"
import { State } from "../../schemas/state.schema";
import { Product } from "../../schemas/product.schema";
import { cartActionTypes } from "../action-types/cart.action-types";

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

let numCartInLocalStorage = parseInt(localStorage.getItem('numCart') || '0');
let cartProductsInLocalStorage = JSON.parse(localStorage.getItem('cartProducts') || '[]');
let productsInLocalStorage = JSON.parse(localStorage.getItem('products') || JSON.stringify(staticProducts));

const initialState: State = {
    numCart: numCartInLocalStorage,
    cartProducts: cartProductsInLocalStorage,
    products: productsInLocalStorage,
}

const cartReducer = (state : State | undefined = initialState, action : any):State => {
    const { type, payload } = action;
    switch (type) {
        case cartActionTypes.ADD_TO_CART:
            return addToCart(state, payload);
        case cartActionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, payload);
        default:
            console.log("here");
            console.log(state);
            return state;
    }

}


export default cartReducer