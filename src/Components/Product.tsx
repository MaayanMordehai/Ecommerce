import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardGroup, Button} from 'react-bootstrap';
import { Product } from '../schemas/product.schema';
import { State } from '../schemas/state.schema';
import { connect } from 'react-redux'

interface ProductStateProps {
  cartProducts: Product[],
}

interface ProductDispatchProps {
  onAddToCart: Function,
  onRemoveFromCart: Function
}

interface ProductProps extends ProductStateProps, ProductDispatchProps {
  product: Product
}

const storeProduct = (props: ProductProps) => {
  const {product, cartProducts, onAddToCart, onRemoveFromCart} = props;

  const isInCart = (product: any) : boolean => {
    return (cartProducts.includes(product));
  };


  const changeCart = (product: Product) => {
    if (isInCart(product)) {
      onRemoveFromCart(product);
    } else {
      onAddToCart(product);
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
      <small className="text-muted">Uploaded on {product.uploadedDate.getFullYear()}-{product.uploadedDate.getMonth()}-{product.uploadedDate.getDate()}</small>
    </Card.Footer>
  </Card>
  </CardGroup>
  );
}

const mapStateToProps = (state: State) : ProductStateProps => {
  return {
    cartProducts: state.cartProducts,
  };
};

const mapDispatchToProps = (dispatch : any) : ProductDispatchProps => {
    return {
      onAddToCart: (product : Product) => dispatch({type: 'ADD_TO_CART', product: product}),
      onRemoveFromCart: (product : Product) => dispatch({ type: 'REMOVE_FROM_CART', product: product})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(storeProduct);