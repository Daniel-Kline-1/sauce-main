import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import mech from "./../photos/thisengineering.jpg";
import rubix from "./../photos/holdingrubix.jpg";
import biz from "./../photos/bizzy.jpg";
import hackathonPic from './../photos/hackathonPic.png';

import Arrow from "../components/parts/Arrow";


export default function About() {
  return (
    <div>
    <Container >
        <Row>
            <Col>
                <div style={{height:'12vh'}}></div>
            </Col>
        </Row>


        <Row style={{height:'7vh'}}>
            <Col>
                <h1>About Page</h1>
            </Col>
        </Row>


        <Row>
            <Col>
              <div style={spaceDivStyle1}></div>
            </Col>
        </Row>


        <Row>
          <Col 
          sm={12}
          md={7}
          lg={6}>
              <text>
              Hello my name is Daniel and I am a Full Stack Software Developer.
              My skills focused currently around React Native.js, React.js, Django,
              PostgreSQL, and AWS. I enjoy making sure every little detail is up to specification.
              I also enjoy collaborating on teams. Two heads is always better than one.
              Scroll down to see how I went from Mechanical Engineer to Software Developer. 
              </text>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={spaceDivStyle2}></div>
          </Col>
        </Row>


        <Arrow/>


        <Row>
          <Col>
            <div style={{height:'30vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col>
            <h3>
              Early Life
            </h3>
          </Col>
        </Row>


        <Row>
          <Col>
          <div style={{height:'3vh'}}></div>
          </Col>
        </Row>



        <Row>
          <Col sm={6}>
            <text>
            Growing up, I always enjoyed building things and solving Rubik’s cube style puzzles.
            From modal cars, modal planes, to 3X3, 4X4, all the way up to 7X7 cube puzzles.
            Knowing my interests I knew that I wanted a job where I can build things and also solve problems.
            While in high school I knew that I wanted to work as an engineer, but I didn’t know what type of engineer.
            I decided to study Mechanical Engineering because it would allow me to pivot into different fields.
            </text>
          </Col>          
        </Row>


        <Row>
          <Col md={6}>
            <img src={rubix} style={imgStyle} alt='failed to load'/>
          </Col>
        </Row>


        <Row style={{pattingBottom:'2vh'}}>
          <Col>
            <p style={{fontStyle:'italic',fontSize:'13px'}}>Photo by MART PRODUCTION from Pexels</p>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={{height:'3vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col>
            <h3>
              College
            </h3>
          </Col>
        </Row>


        <Row>
          <Col sm={6}>
            <text>
            While studying Mechanical Engineering I learned to code using the programs MatLab and MPLab.
            Matlab is good for analyzing data from lab experiments. MPLab is good for programing
            microcontrollers that tell robots and electronics what to do.
            </text>
          </Col>
        </Row>


        <Row>
          <Col  md={6}>
            <img src={mech} style={imgStyle} alt='failed to load'/>
          </Col>
        </Row>



        <Row style={{pattingBottom:'2vh'}}>
          <Col>
            <p style={{fontStyle:'italic',fontSize:'13px'}}>Photo by ThisIsEngineering from Pexels</p>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={{height:'3vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col>
            <h3>
            After College
            </h3>
          </Col>
        </Row>


        <Row>
          <Col sm={6}>
            <text>
            I enjoyed coding with the technologies mentioned above,
            however there was little demand for those specific skills after graduation.
            Because the skills needed for the above technologies align with the skills needed for data analytics,
            I decided to join the Rutgers Data Science Certificate Program to make myself more marketable.
            While at the certificate program I was able to get a taste of software development through the Flask app (python).
            As soon as I started working with software development I knew that was what I wanted to do.
            Data analytics involves problem solving, which I enjoy, but does not involve building.
            Software development has the building aspect that I’ve been looking for. I have been developing software ever since.
            </text>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={{height:'3vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <img 
            src={biz} 
            style={imgStyle} 
            alt='failed to load'/>
          </Col>
        </Row>


        <Row style={{pattingBottom:'2vh'}}>
          <Col>
            <p style={{fontStyle:'italic',fontSize:'13px'}}>
              Photo by fauxels from Pexels
            </p>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={{height:'10vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col 
          sm={12}
          md={6}>
            <text>
              The below photo was taken
              at a Hackathon hosted by The College of New Jersey.
              My team won first place for 
              best use of the Assembly AI API.
              We made an app which took in an audio recording and location
              of a user. The audio is then sent to the Assembly AI API 
              and a setamint analysys is ran on the audio. We wanted to
              have aheat map to show where the locations with positive audio results 
              are. But we only had 24 hours to compleate the hackathon. HERE is 
              what was presented. HERE is where it is now
            </text>
          </Col>
        </Row>


        <Row>
          <Col>
            <div style={{height:'3vh'}}></div>
          </Col>
        </Row>


        <Row>
          <Col md={6}>
            <img 
            src={hackathonPic} 
            style={imgStyle} 
            alt='failed to load'/>
          </Col>
        </Row>


        <Row style={{pattingBottom:'2vh'}}>
          <Col>
            <p style={{fontStyle:'italic',fontSize:'13px'}}>
              Left: Matt He, Middle: Daniel Kline[me],
              Right: Matt, Not Shown: Steven Malkowitz
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div style={{height:'1vh'}}></div>
          </Col>
        </Row>

        <Row style={{pattingBottom:'2vh'}}>
          <Col>
            <p style={{fontStyle:'italic',fontSize:'13px'}}>
            </p>
          </Col>
        </Row>
    </Container>
    </div>
  );
}



const spaceDivStyle1 = {
  height:'7vh'
}

const spaceDivStyle2 = {
  height:'25vh'
}

const imgStyle = {
  maxHeight:'100%',
  maxWidth:'100%',
  paddingTop:'2vh',
  paddingBottom:'0',
  
  
}