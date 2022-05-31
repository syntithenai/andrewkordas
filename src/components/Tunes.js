import React from 'react'
import { Link  } from 'react-router-dom'
import {Tabs, Tab} from 'react-bootstrap'

export default function Tunes(props) {
  
  return (

    <div id="contact" style={{marginTop:'5em'}}  >
       <h1>Tunes</h1>
       <div>
       A proud Ukranian I love my wog music. Here's some favorites.
       </div>
      <Tabs defaultActiveKey="tune1" id="uncontrolled-tab-example" className="mb-3">
         <Tab eventKey="tune1" title="AA">
           
         </Tab>
         <Tab eventKey="tune2" title="BB">
           
         </Tab>
         <Tab eventKey="tune3" title="CC" >
           
         </Tab>
       </Tabs>
    </div>

  );
}

