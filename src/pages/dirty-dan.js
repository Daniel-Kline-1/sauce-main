import React, {useState,useEffect} from "react";
import img1 from "./../photos/dexter.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./../actions/index";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from "react-bootstrap/Container";
import { height } from "dom-helpers";
import Image from 'react-bootstrap/Image'
function DirtyDan() {
  const [isLoading, setLoading] = useState(false);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  


  async function handleClick() { 
    setLoading(true);
    if (isLogged){

      try{
        let request = await simulateNetworkRequest();
        dispatch(actions.logout());

      }catch(error){
          throw error;
          //console.log(error)
      };
      dispatch(actions.logout());
    }else{
     try {
      let request = await simulateNetworkRequest();
      dispatch(actions.login());}

      catch(error){
        
      }
    };
  }


  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 20000));
  }

  async function handleAPICall() {
    let request = await simulateNetworkRequest()
    
    return request
  }

  useEffect(() => {
    if (isLoading){ 
      handleAPICall()
      setLoading(false)
        };
    
  }, [isLoading]);


  return (
    <div className="photo1" style={styleHome}>
      
      {isLogged ? (
      <Container>
        <Row>
          <Col>
              <div style={{height:'10vh'}}></div>
          </Col>
        </Row>
        <Row>
          <Col>
              <ReactPlayer url="https://www.youtube.com/watch?v=kOyPsl0bI1g" />
          </Col>
          <Col>
              <Button
                  variant="success" 
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                >
                  Log Out
              </Button>
          </Col>
        </Row>
      </Container>
      
      ) : (
        <Container>
          <Row>
            <Col>
              <Button
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
                variant="primary"
              >
                Log In
              </Button>
            </Col>
          </Row>
        </Container>
      )}
      
    </div>
  );
}

export default DirtyDan;

const styleHome = {
  
  height: "100vh",
  width: "100vw",
  backgroundPosition: "center",
};





