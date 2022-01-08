import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.css';

interface Brand {
    name: string;
    path: string;
}
interface Page {
    name: string;
    path: string;
}
interface NavbarProps {
    pages: Array<Page>;
    brand: Brand;
}


const MyNavbar = (props: NavbarProps) => {
  const {pages, brand} = props;  
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand href={brand.path}>{brand.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                {pages.map((page, index) => {
                    return <Nav.Link  key={index} href={page.path}>{page.name}</Nav.Link>
                })}
            
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>  
);
}

export default MyNavbar;