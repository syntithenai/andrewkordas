import './App.css';
import React from 'react' 
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ForSale from './components/ForSale'
import Contact from './components/Contact'
import Shipping from './components/Shipping'
import Tunes from './components/Tunes'

import {HashRouter as  Router,Routes, Route, Link  } from 'react-router-dom'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  
  return  <div id="topofpage" className="App" >
            <Router >
                
              <Header />
              <div className="App-body">
                  <Routes>
                    <Route  path={``}   element={<HomePage      />}  />
                    <Route  path={`/contact`}   element={<Contact      />}  />
                    <Route  path={`/forsale`}   element={<ForSale      />}  />
                    <Route  path={`/shipping`}   element={<Shipping      />}  />
                    <Route  path={`/tunes`}   element={<Tunes      />}  />
                  </Routes>
                  
              </div>
              
              <Footer/>
            </Router>

            <div id="bottomofpage" ></div>
    </div>


}

export default App;
