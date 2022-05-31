import {Link  } from 'react-router-dom'
import React from 'react'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer(props) {
  
  return (

    <div id="footer" style={{textAlign:'left', position:'fixed', bottom:'0' ,minHeight:'1.3em', backgroundColor:'lightblue', width:'100%'}}  >
       <span style={{marginLeft:'2em'}} >© Andrew Kordas 2022</span>
    </div>

  );
}

