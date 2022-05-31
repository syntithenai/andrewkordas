import React from 'react'
import { Link  } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
export default function HomePage(props) {
  
  return (

    <div id="home" style={{marginTop:'5em', paddingBottom:'5em',textAlign:'left', marginLeft:'0.2em'}}  >
       <h1>Andrew's Luthier Services</h1>
       <div style={{fontStyle:'italic', marginTop:'1em', marginBottom:'1em'}} >Servicing the Bega Valley Shire and Beyond</div>
       <Container>
         <Row>
         <Col sm="12" md="6" lg="4" style={{border:'1px solid black'}}>
           <h3>Bow Restringing</h3>
           <div style={{marginTop:'1em', marginBottom:'1em'}} >
           My bread and butter. I have access to a range of horse hairs and hardware to suit your bow.
           </div>
        </Col>
        <Col sm="12" md="6" lg="4" style={{border:'1px solid black'}} >
           <h3>Setup</h3>
           <div style={{marginTop:'1em', marginBottom:'1em'}} >
           Ensuring bridge and soundpost are set correctly will help get the best sound from your instrument.
           This is especially important for new instruments as they settle.
           </div>
         </Col>
         <Col sm="12" md="6" lg="4" style={{border:'1px solid black'}} >
          <img src="/workbench.jpg"  style={{width:'90%'}}  />
         </Col>
         <Col sm="12"  md="6" lg="6" style={{border:'1px solid black'}} >
           <h3> Repairs</h3>
           <div>
           No job too big or too small.... but some things ain't worth fixing and other times, a patch is enough.
           <div style={{marginTop:'1em', marginBottom:'1em'}} >A quality older instrument can be well worth the time and effort.</div>
           <div style={{marginTop:'1em', marginBottom:'1em'}} >I'll make sure you understand what I can do for you and how much it will cost before I get started.</div>
           </div>
         </Col>
         <Col sm="12" md="6" lg="4" style={{border:'1px solid black'}} >
           <h3>Maintenance</h3>
           <div  style={{marginTop:'1em', marginBottom:'1em'}}>
           Regular maintenance of your instrument prevents future problems.
           I can help with restringing, bridge & soundpost adjustments, peg adjustments & lubrication, nut lubrication, oiling and cleaning to get your instrument in top shape.
           </div>
         </Col>
         
         
         
        </Row>
       </Container>
       
       <br/>
       <br/>
       <br/>
    </div>

  );
}

