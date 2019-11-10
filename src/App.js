import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Home';
import Shoes from './Shoes';
import Contact from "./Contact";



class Main extends Component {
  render() {
    return(
      <div>
        <HashRouter>
          <div>
            <h1>Awww Snap Shoes</h1>
            <ul className="header">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shoes">Shoes</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/shoes" component={Shoes}/>
              <Route path="/contact" component={Contact}/>
            
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
export default Main;