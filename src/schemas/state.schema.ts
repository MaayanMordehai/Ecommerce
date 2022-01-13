import { Product } from "./product.schema";

export interface State {
    numCart: number,
    cartProducts: Array<Product>,
    products: Array<Product>,
}

