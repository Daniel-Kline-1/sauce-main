import React, { useState,useEffect } from "react";
import selfy from "./../photos/selfy4.png";
import logo from "./../photos/logo512.png";
import logo2 from "./../photos/logo192.png";
import "./../App.css";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import { height, text } from "dom-helpers";
import Image from 'react-bootstrap/Image';
import arrow from "./../photos/Arrow-down.svg";
import django from "./../photos/django.png";
import js from "./../photos/javascript.png";
import reduxpic from "./../photos/redux.png";
import aws from "./../photos/aws.jpg";
import postgres from './../photos/postgresql.png';
import python from './../photos/python-logo.png'
export default function Home() {
const [textRead,setTextRead] = useState("");

const [ct,setCt] = useState(0);
const [ctList,setCtList] = useState(0);
const textList = [
  'world class engineering ',
  'high preformance ',
  'professionalism ',
  'synergy ',
  'attention to detail ',
];
const stringVal = 'professional';


useEffect(() => {

      

      

},[textRead])

function handleCt(ct,ctList){
if (ct === textList[ctList].length-1){
setCt(0);
}
setCtList((ctList+1)%textList.length);
setCt(ct+1);

}


      
      
      setInterval(() =>{
      //do what you need here
      setTextRead(textList[ctList].substr(0,ct));
      handleCt(ct,ctList);
       
       
       
      }, 500);
    
  




  return (
<>
<Container style={{alignItems:'center'}}>
  <Row>
    <Col sm={12}>
      <div style={{height:'15vh'}}></div>
    </Col>
  </Row>
  <Row style={{alignItems:'center'}}>


    <Col style={colStyle} > 
      <Image src={logo} className='App-logo align-self-center' style={selfyStyle}/>
    </Col>
    <Col>
      <div id='middleHome'>
        <div >
          {textRead}
        </div>
      </div>
    </Col>
    <Col sm={4}>
     <div >
      <h2 style={divtextStyle} className='align-self-center'>Hello my name is Daniel Kline, I am a Full Stack Software Developer</h2>
     </div>
    </Col>

{/*
    <Col> 
        <Image src={logo} className='App-logo align-self-center' />
    </Col>
*/}
  
  </Row>

  <Row>
    <Col sm={12}>
      <div style={{height:'20vh'}}></div>
    </Col>
  </Row>

  <Row>
      <Col sm={{span:2,offset:5}} style={arrowParentStyle}>
        <img style={arrowStyle} src={arrow} className='moveArrow'/>
      </Col>
  </Row>

<Row>

  <Col>
  <div style={{height:'20vh'}}></div>
  </Col>
  </Row>
  <Row>
    <Col sm={{span:4,offset:4}} style={{textAlign:'center'}}>
      <h4 style={textStyle}>
        Some of my skills include
      </h4>
    </Col>
  </Row>

  <Row >
    <Col sm={{span:2,offset:1}}>
    <Button variant="outline-info" className='align-self-center'>
      <Image src={logo2}/>
      <text>React Native.JS</text>
      </Button>{' '}
    </Col>
    <Col sm={{span:2,offset:2}}>
    <Button variant="outline-info" className='align-self-center'>
      <Image src={logo2}/>
      <text>React.JS</text>
      </Button>{' '}
    </Col>
    <Col sm={{span:2,offset:2}}>
    <Button variant="outline-info" className='align-self-center'>
      <Image src={aws} style={imgButtonStyle}/>
      <text>Amazon Web Services</text>
      </Button>{' '}
    
    </Col>
  </Row>
  <Row>

  <Col>
  <div style={{height:'8vh'}}></div>
  </Col>
  </Row>

  <Row >
    <Col sm={{span:2,offset:1}}>
    <Button variant="outline-info" className='align-self-center'>
      <Image src={js}/>
      <text>JavaScript</text>
      </Button>{' '}
    </Col>
    <Col sm={{span:2,offset:2}}>
    <Button variant="outline-info">
      <Image src={reduxpic}/>
      <text>Redux</text>
      </Button>{' '}
    </Col>
    <Col sm={{span:2,offset:2}}>
    <Button variant="outline-info">
      <Image src={django}/>
      <text>Django</text>
      </Button>{' '}
    </Col>
  </Row>

  <Row>

  <Col>
  <div style={{height:'8vh'}}></div>
  </Col>
  </Row>

  <Row>
  <Col sm={{span:2,offset:3}}>
    <Button variant="outline-info">
      <Image src={python}/>
      <text>Python3</text>
      </Button>{' '}
    </Col>
    <Col sm={{span:2,offset:2}}>
    <Button variant="outline-info">
      <Image src={postgres}/>
      <text>PostgreSQL</text>
      </Button>{' '}
    </Col>
  </Row>
  <Row>

  <Col>
  <div style={{height:'8vh'}}></div>
  </Col>
  </Row>
</Container>

</>
  );
}

const selfyStyle = {
 alignSelf:'center',
 
 
}

const textStyle = {
  verticalAlign:'middle',
  
}

const divtextStyle = {
  textAlign:'center',
  verticalAlign:'middle',
  lineHeight:'100%',
}

const colStyle = {
  alignItems:'center'
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

const buttonStyle = {
  maxWidth:'100%',
  maxHeight:'100%',
}

const imgButtonStyle = {
  maxWidth:'100%',
  maxHeight:'100%',
  height:'auto',
}

const rowbuttonStyle = {
  height:'20vh',
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

const styleHome0 = {
  backgroundColor: '#F3F3F3',
  height: "100vh",
  width: "100vw",
  backgroundPosition: "center",

};

const styleHome1 = {
  backgroundColor: '#F3F3F3',
  height: "100vh",
  width: "100vw",
  backgroundPosition: "center",
};

const textRow1 = {
  margin:'30px'
}

const divTopHeader = {
  
  height: "30vh",
  margin: '0',
  
}
const textTopHeader = {
 height:'30%',
 width:"40%" 
}


const styleHome2 = {
  backgroundColor: '#F3F3F3',
  height: "30vh",
  width: "30vw",
  backgroundPosition: "center",
  
};

const styleText = {
  
};

const imgStyle = {
  height:'80%',
  width:'20%',
}

