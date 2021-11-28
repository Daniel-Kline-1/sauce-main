import React, { useState,} from "react";
import logo from "./../photos/logo512.png";
import logo2 from "./../photos/logo192.png";
import "./../App.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import django from "./../photos/django.png";
import js from "./../photos/javascript.png";
import reduxpic from "./../photos/redux.png";
import aws from "./../photos/aws.jpg";
import postgres from './../photos/postgresql.png';
import python from './../photos/python-logo.png';

import useInterval from "./../components/functions/useInterval";
import Arrow from "../components/parts/Arrow";


export default function Home() {
const [textRead,setTextRead] = useState("");

const [ctList,setCtList] = useState(0);
const [ct,setCt] = useState(0);
const [direction, setDirection] = useState('RIGHT')
const textList = [
  'Engineer .',
  'Top Value .',
  'Synergy .',
  'Attention To Detail .',
  'Industry Leading .',
  'Try This Site .',
  'On Mobile .',
  
];


   
  useInterval(() =>{
      //do what you need here
      if (textList[ctList][ct] === ".") {
        setDirection("LEFT");
        setCt(ct-1);
        return;
   
     }
   
     if (direction === "LEFT"){
       if(ct===0 && ctList===textList.length-1){
         setCtList(0);
         setDirection("RIGHT");
         return;
       };
       if(ct === 0 && ctList<textList.length-1){
         setCtList(ctList+1);
         setDirection("RIGHT");
         return
       }
       setCt(ct-1);
       setTextRead(textList[ctList].substring(0,ct));
       return;
   
     }
     else if(direction === "RIGHT"){
   
       setCt(ct+1);
       setTextRead(textList[ctList].substring(0,ct));
       return;
     }
       
       
      }, 100);
    
  




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
        <div style={textReadStyle} >
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

<Arrow/>

<Row>

  <Col>
  <div style={{height:'20vh'}}></div>
  </Col>
  </Row>
  <Row>
    <Col md={{span:4,offset:4}} style={{textAlign:'center'}}>
      <h4 style={textStyle}>
        Some of my skills include
      </h4>
    </Col>
  </Row>

  <Row >
    <Col  xs={{span:4,offset:0}} sm={{span:2,offset:1}}>
    <div style={divBadgeStyle} className='homeDiv'>
      <div>
        <Row>
          <Col>
            <Image src={logo2}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <text>
              React Native.JS
            </text>
          </Col>
        </Row>
      </div>
      </div>{' '}
    </Col>
    
    <Col xs={{span:4,offset:0}} sm={{span:2,offset:2}}>
    <div style={divBadgeStyle} className='homeDiv'>
        <div>
        <Row>
          <Col>
            <Image src={logo2}/>
          </Col>
        </Row>
          <Col>
            <text>
              React.JS
            </text>
          </Col>
          </div>
      </div>{' '}
    </Col>

    <Col xs={{span:4,offset:0}} sm={{span:2,offset:2}}>
      <div style={divBadgeStyle} className='homeDiv'>
        <div>
          <Row>
            <Col>
              <Image src={reduxpic} />
            </Col>
          </Row>
          <Row>
            <text>
              Redux
            </text>
          </Row>
        </div>
      </div>{' '}
    </Col>
  </Row>

  <Row>

    <Col xs={{span:12}}>
      <div style={{height:'8vh'}}></div>
    </Col>
  </Row>

  <Row >

    <Col xs={{span:4,offset:0}} sm={{span:2,offset:1}}>
      <div style={divBadgeStyle} className='homeDiv'>
          <div>
          <Row>
            <Col>
              <Image src={python}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>
                Python3
              </text>
            </Col>
          </Row>
          </div>
      </div>{' '}
    </Col>


    <Col xs={{span:4,offset:0}} sm={{span:2,offset:2}}>
      <div style={divBadgeStyle} className='homeDiv'>
        <div>
        <Row>
          <Col>
            <Image src={django} id='aws_django'/>
          </Col>
        </Row>
        <Row>
          <Col>
            <text>
              Django
            </text>
          </Col>
        </Row>
        </div>
      </div>{' '}
    </Col>

    <Col xs={{span:4,offset:0}} sm={{span:2,offset:2}}>
      <div style={divBadgeStyle} className='homeDiv'>
        <div>
          <Row>
            <Col>
              <Image src={postgres}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>
                PostgreSQL
              </text>
            </Col>
          </Row>
        </div>
      </div>{' '}
    </Col>
  </Row>

  <Row>

    <Col xs={{span:12}}>
      <div style={{height:'8vh'}}></div>
    </Col>
  </Row>

  <Row>
    <Col xs={{span:6}} sm={{span:2,offset:3}}>
      <div style={divBadgeStyle} className='homeDiv'>
        <div>
          <Row>
            <Col>
              <Image src={aws} id='aws_django'/>
            </Col>
          </Row>
          <Row>
            <Col>
              <text>
                Amazon Web Services
              </text>
            </Col>
          </Row>
        </div>
      </div>{' '}
    </Col>

    <Col xs={{span:6}} sm={{span:2,offset:2}}>
      <div style={divBadgeStyle} className='homeDiv'>
        <div>
          <Row>
            <Col>
              <Image src={js}/>
            </Col>
          </Row>
          <Row>
            <Col>
              <text >
                JavaScript
              </text>
            </Col>
          </Row>
        </div>
      </div>{' '}
    </Col>
  </Row>


  <Row>
    <Col xs={{span:12}}>
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
  justifyContent:'center',
  alignSelf:'center',
  color:"black"
  
}

const divtextStyle = {
  textAlign:'center',
  verticalAlign:'middle',
  lineHeight:'100%',
}

const colStyle = {
  alignItems:'center'
}

const divBadgeStyle = {
  maxWidth:'100%',
  maxHeight:'100%',
  minHeight:'100%',
  textColor:'black',
  textAlign:'center',
  backgroundColor:'white',
  verticalAlign: 'middle',
  lineHeight:'100%',
}


const textReadStyle = {
  fontWeight: 'bold',
  fontSize: '5vh',
  color:'#61DAFB',
  minHeight:'110%',
}
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

