import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card} from 'react-bootstrap';
import { State } from '../schemas/state.schema';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';


const ProductsList = () => {
  const products = useSelector((state : State) => state.products);
  const nevigate = useNavigate();

  return (
    <div>
    <br />
    <h1 className='text-center'> Maayan's Store </h1>
    <br/>
    <Row xs={1} md={2} className="g-4">
  {products.map((product, idx) => (
    <Col key={idx}>
      <Card>
        <Card.Img className='cardImage' variant="top" src={product.imageurl} />
        <Card.Body >
          <Card.Title className='text-center' onClick={() => nevigate(`/Product/${product.id}`)}>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        
      </Card>
    </Col>
  ))}
</Row>
</div>
);
}


export default ProductsList;