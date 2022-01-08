import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardGroup, Button} from 'react-bootstrap';

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

interface ProductProps {
  product: Product
}

const Product = (props: ProductProps) => {
  const {product} = props

  return (
  <CardGroup>
    <Card>
      <Card.Img src={product.imageurl} alt="Card image" />
      <Card.ImgOverlay/>
  </Card>
  <Card>
    <Card.Body>
      <Card.Header>
      <span className="badge bg-success mr-2">{product.category.name}</span>
      <br/>
      {product.category.subCategories.map((catagory)=> {
        return <span className="badge bg-danger mr-2">{catagory}</span>
      })}
      </Card.Header>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        {product.description}
        <br/>
        <br/>
        Price : {product.price}$
        <br/>
        <br/>
        <Button variant="outline-primary">Add To 🛒</Button>
        <br/>
        <br/>
        <h5> Additional Information </h5>
        {product.additionalInfo.map((add) => {
          return <div>{add.title}: {add.info}</div>
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

export default Product;