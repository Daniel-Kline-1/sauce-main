import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'
//import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

function Nav() {
  return (
 

    <nav style={styleNav}>
      <Container>
    <Row>
      <Col sm={7}>
        <Link to="/">
          
          <Button variant="outline-light" style={navText}>Home</Button>
        </Link>
      </Col>
          

      <Col>
          <Link to="/about">
          <Button variant="outline-light" style={navText}>About</Button>
          </Link>
      </Col>

      <Col>
          <Link to="/dirty-dan">
          <Button variant="outline-light" style={navText}>Dirty Dan</Button>
          </Link>
      </Col>
    </Row>
    </Container>
    </nav>






  );
}

const styleNav = {
  backgroundColor: '#283747',

};

const navText = {
  color: '#DE354C',

}

export default Nav;
