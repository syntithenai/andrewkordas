import React from 'react'
import { Link  } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'

export default function ForSale(props) {
  
  return (

    <div id="forsale" style={{marginTop:'5em'}}  >
       <h1>For Sale</h1>
       <div>I have a small stock of preloved instruments, loving restored to tip top shape.</div>
       <div><Link to="/contact" >Give me a call</Link> to see if something fits.</div>
       <Container>
         <Row>
         <Col style={{border:'1px solid black'}} >
              <h3>Violins</h3>
              <div>
              </div>
              
         </Col>
         <Col style={{border:'1px solid black'}}>
              <h3>Other Instruments</h3>
              <div>
              </div>
        </Col>
        </Row>
       </Container>
       
       
       
       <img src="/violin.jpg"  style={{width:'90%'}}  />
    </div>

  );
}

