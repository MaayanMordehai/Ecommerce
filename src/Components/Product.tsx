import React from 'react';

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
    uploadedDate: Date,
    price: number,
    description: string,
    category: Category,
    sellerName: string,
    additionalInfo: Array<AdditionalInfo>,
}

interface ProductProps {
  product: Product
}

const Product = (props: ProductProps) => {
  return (
    <h1>Product {props.product.name}</h1>
  );
}

export default Product;