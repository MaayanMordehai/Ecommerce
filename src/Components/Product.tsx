import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardGroup, Button} from 'react-bootstrap';
import { Product } from '../schemas/product.schema';
import { State } from '../schemas/state.schema';
import { useDispatch, useSelector } from 'react-redux'
import { cartActionTypes } from '../redux/action-types/cart.action-types';
import { useParams } from 'react-router';


const StoreProduct = () => {
  const { id } = useParams();
  const products = useSelector((state: State) => state.products)
  const cartProducts = useSelector((state : State) => state.cartProducts);
  const dispatch = useDispatch();
 
  const getProduct = () => {
    for (let currProduct of products) {
      if (currProduct.id.toString() === id) {
        return currProduct;
      }
    }
    return products[0];
  }

  const product : Product = getProduct();

  const isInCart = (product: any) : boolean => {
    return (cartProducts.includes(product));
  };


  const changeCart = (product: Product) => {
    if (isInCart(product)) {
      dispatch({ type: cartActionTypes.REMOVE_FROM_CART, payload: product})
      //cartActions.removeFromCart(product);
    } else {
      dispatch({ type: cartActionTypes.ADD_TO_CART, payload: product})
      //cartActions.addToCart(product);
    }
  }
  
  return (
  <CardGroup>
    <Card>
      <Card.Img src={product.imageurl} alt="Card image" />
      <Card.ImgOverlay/>
  </Card>
  <Card>
    <Card.Body>
      <Card.Header className="text-center">
      <span className="badge bg-success mr-2">{product.category.name}</span>
      <br/>
      {product.category.subCategories.map((catagory, index)=> {
        return <span key={index} className="badge bg-danger mr-2">{catagory}</span>
      })}
      </Card.Header >
      <Card.Title className="text-center">{product.name}</Card.Title>
      <Card.Text className='white'>
        {product.description}
        <br/>
        <br/>
        <strong>Price: {product.price}$</strong>
        <br/>
        <br/>
        <Button variant="outline-primary" onClick={() => changeCart(product)}>{isInCart(product) ? "Remove From 🛒" : "Add To 🛒"}</Button>
        <br/>
        <br/>
        <div><u><strong>Brand</strong></u></div>
        {product.sellerName}
        <br />
        <br />
        {product.additionalInfo.map((add, index) => {
          return <div key={index}>
            <div><u><strong>{add.title}</strong></u></div>
            <div> {add.info}</div><br /></div>
        })}
        <br/>
        <br/>
        Currently on Stock there are: {product.amount} {product.name}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uploaded on {product.uploadedDate}</small>
    </Card.Footer>
  </Card>
  </CardGroup>
  );
}


export default StoreProduct;