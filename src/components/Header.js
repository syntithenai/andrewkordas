import React from 'react'
import {Link  } from 'react-router-dom'
import {Button} from 'react-bootstrap'
export default function Header(props) {
  
  return <div id="header" style={{position:'fixed', textAlign:'left', top:'0' ,minHeight:'4em', backgroundColor:'lightgrey', width:'100%'}} >
       <Link  to="/"><Button>Home</Button></Link>
       <Link style={{marginLeft:'0.2em'}} to="/contact"><Button>Contact</Button></Link>
       <Link style={{marginLeft:'0.2em'}} to="/shipping"><Button>Shipping</Button></Link>
       <Link style={{marginLeft:'0.2em'}} to="/forsale"><Button>Instruments</Button></Link>
    </div>

}
//   <Link style={{marginLeft:'0.2em'}} to="/tunes"><Button>Tunes</Button></Link>
    

