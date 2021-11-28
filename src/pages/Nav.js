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
          <Col style={colStyle}>
            <Link to="/">
              
              <Button variant="outline-light" style={navText}>Home</Button>
            </Link>
          </Col>
              

          <Col
            xs={{offset:0}}
            sm={{offset:0}}
            md={{offset:3}}
            lg={{offset:5}}
            style={colStyle}>
              <Link to="/about">
              <Button variant="outline-light" style={navText}>About</Button>
              </Link>
          </Col>

          <Col style={colStyle} >
              <Link to="/resume">
              <Button variant="outline-light" style={navText}>Resume</Button>
              </Link>
          </Col>
        </Row>
      </Container>
    </nav>






  );
}

const styleNav = {
  backgroundColor: '#44AEFE',
  height:'10vh',

};

const navText = {
  //'#DE354C',
  fontWeight:'bold'

}

const colStyle = {
  //alignSelf:'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}

export default Nav;
