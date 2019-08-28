
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div>Home</div>;
const AboutMe = () => <h1>About Me</h1>;
const Contact = () => <h3>Contact Us</h3>;

const App = () => {
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Contact Us</Link>
        </li>
        <li>
          <Link to="/contactUs"></Link>
        </li>
      </ul>
      <hr />
      <Route exact Path="/" component={Home} />
      <Route Path="/about" component={AboutMe} />
      <Route path="/contact" component={Contact} />
    </div>
  </BrowserRouter>;
};
