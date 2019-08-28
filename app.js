import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
 
 const hello =() =>(
<Router>
<div>
    <ul>
      <li><Link to = "/">Home</Link></li>
      <li><Link to = "/about" >About</Link></li>
      <li><Link to = "/contactus">Contact Me</Link></li>
    </ul>

<hr/> 
<Route path= "/" component  ={Home}/>   
<Route path="/about" component = {About}/>
<Route path = "/contactMe" component = {ContactMe}/>
</div>


</Router>
 )
