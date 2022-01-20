import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../schemas/state.schema';
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button} from 'react-bootstrap';
import { cartActionTypes } from '../redux/action-types/cart.action-types';

const Cart = () => {
  const cartProducts = useSelector((state : State) => state.cartProducts);
  const numCart = useSelector((state: State) => state.numCart);
  const dispatch = useDispatch()

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let product of cartProducts) {
      totalPrice += product.price;
    }
    return totalPrice;
  }

  const buy = () => {
    dispatch({type: cartActionTypes.CHECKOUT})
    alert("Thank you!")
  }

  return (
    <div>
      {numCart == 0 ? <h1 className='center'>No Products in Cart</h1> : 
    <Table striped bordered hover className='container'>
      <thead>
        <tr>
        <td>product</td>
        <td>price</td>
        </tr>
      </thead>
    <tbody>
    {cartProducts.map((product) => {
      return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    })}
    </tbody>
    <br />
    Total Price: {getTotalPrice()}
    <br />
    <br />
    <Button variant="outline-primary" onClick={() => buy()}>Checkout</Button>
</Table>
}
</div>
  );
}

export default Cart;