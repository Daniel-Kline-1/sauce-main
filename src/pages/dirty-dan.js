import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import resumeUse from './../photos/resumePortfolio.png';
import resumeDoc from './../photos/resumePortfolio.pdf';

export default function DirtyDan() {
const resumeFail = 'FAILED TO LOAD RESUME, FIND MY INFO https://www.linkedin.com/in/klined/'
  return (
    <div className="photo1" style={styleHome}>
      <Container>
        <Row>
          <Col>
            <div style={{height:'13vh'}}></div>
          </Col>
        </Row>

        
        <Row>
          <Col 
          xs={{span:12,offset:0}}
          md={{span:6,offset:1}}
          lg={{span:6,offset:2}}
          style={colStyle}
          >
            <a href={resumeDoc} download='daniel_kline_resume' target='_blank' rel="noopener noreferrer">
              <Button variant="primary">Download Resume</Button>
            </a> 
          </Col>
        </Row>

        <Row>
            <Col>
              <div style={{height:'7vh'}}></div>
            </Col>
        </Row>

        <Row>
          <Col style={colStyle}
          sm={{span:12,offset:0}}
          md={{span:6,offset:1}} 
          lg={{span:6,offset:2}}
          >
             <img src={resumeUse} style={imgStyle} alt={resumeFail}/>    
          </Col> 
        </Row>
        

   
        <Row>
          <Col>
            <div style={{height:'10vh'}}></div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}



const styleHome = {
  
  minHeight: "100vh",
  width: "100vw",
  backgroundPosition: "center",

};

const colStyle = {
  //alignSelf:'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

}

const imgStyle = {
  maxWidth:'100%',
  maxHeight:'100%',
  height:'auto',
}



