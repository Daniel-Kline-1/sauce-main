import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";

export default function Footer() {
return (
    <>
     <nav style={styleNav}>
    <Container>
        <Row>
            <Col>
            <div style={{height:'25vh',backgroundColor: '#283747',width:'100%'}}></div>
            </Col>
        </Row>

    </Container>
    </nav>
    </>
);
}
const styleNav = {
    backgroundColor: '#283747',
  
  };