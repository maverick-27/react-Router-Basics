import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import ContactMe from './ContactMe';

 



const routing = (
  <Router>
    <div>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "/about" >About</Link></li>
        <li><Link to = "/contact">Contact Me</Link></li>
      </ul>      



      <Route exact path= "/" component  ={Home}/>   
      <Route path="/about" component = {About}/>
      <Route path = "/contact" component = {ContactMe}/>
    </div>
  </Router>
 )



 render(
  routing,document.getElementById('root')
)



//  <Router>
// <div>
    // <ul>
    //   <li><Link to = "/">Home</Link></li>
    //   <li><Link to = "/about" >About</Link></li>
    //   <li><Link to = "/contactus">Contact Me</Link></li>
    // </ul>

// <hr/> 
// <Route path= "/" component  ={Home}/>   
// <Route path="/about" component = {About}/>
// <Route path = "/contactMe" component = {ContactMe}/>
// </div>


// </Router>
