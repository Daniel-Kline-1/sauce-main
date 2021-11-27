import React, { useState,} from "react";
import arrow from "./../../photos/Arrow-down.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ArrowFunction(){
    
    
  return (

        <Row>
        <Col sm={{span:2,offset:5}} style={arrowParentStyle}>
            <img style={arrowStyle} src={arrow} className='moveArrow' alt={'error'}/>
        </Col>
        </Row>

    )
}

const arrowStyle = {
    width:'10vw',
    height:'10vh',
    position:'absolute'
  }

  const arrowParentStyle = {
    alignItems:'center',
    justifyContent: 'center',
    display:'flex'
  }