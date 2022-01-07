import React from 'react';

interface Category {
    name: string,
    subCategories: Array<string>
}

interface AdditionalInfo {
    title: string,
    info: string
}

interface ProductProps {
    name: string,
    uploadedDate: Date,
    price: number,
    description: string,
    category: Category,
    sellerName: string,
    additionalInfo: AdditionalInfo,
}

const Product = (props: ProductProps) => {
  return (
    <h1>Product</h1>
  );
}

export default Product;