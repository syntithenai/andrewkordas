import React from 'react'
import { Link  } from 'react-router-dom'
import {QRCodeSVG} from 'qrcode.react'

export default function Contact(props) {
  
  return (

    <div id="contact" style={{marginTop:'5em', marginBottom:'5em'}}  >
       <h1>Contact</h1>
       <div>
       Best bet is to give me a bell and have a yarn about how I can help.
       <a href="tel:0437 397 031" style={{textDecoration:'none', color:'black'}}><div style={{fontSize:'1.5em', fontWeight:'bold'}} >0437 397 031</div></a>
       
       </div>
       
       <img src="/andrew.jpg"  style={{width:'90%'}}  />
       <br/>
       <br/>
       <br/>
       <br/>
       <div style={{width:'100%'}}>
              <QRCodeSVG width='80%' height='80%' renderAs="svg" value={window.location.href} />
       </div>
    </div>

  );
}

