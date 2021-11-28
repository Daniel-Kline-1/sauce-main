import React from "react";
import Container  from "react-bootstrap/Container";

export default function Footer() {
return (
    
    <nav style={navStyle}>
        <Container>
            <div style={divStyle}></div>
        </Container>
    </nav>
    
);
}
const navStyle = {
    backgroundColor: '#283747',
  
  };

const divStyle = {
    height:'25vh',
    backgroundColor: '#283747',
    width:'100%',
}