import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Card} from 'react-bootstrap';
import { State } from '../schemas/state.schema';
import { Product } from '../schemas/product.schema';
import { connect } from 'react-redux'
import produce from 'immer';

interface ProductListProps {
  products: Product[]
}

const ProductsList = (props: ProductListProps) => {
  const { products } = props;

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
          <Card.Link href={`/Product/${product.id}`}>
          <Card.Title className='text-center'>{product.name}</Card.Title>
          </Card.Link>
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

const mapStateToProps = (state: State) : ProductListProps => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductsList);