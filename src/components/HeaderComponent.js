import React, { Component } from "react";
import {
  Jumbotron,
  Navbar,
  Nav,
  NavBarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
            
        };
        //this.toggleNav  = this.toggleNav.bind(this);
        // Inorder to make the function available in our JSX, we need to bind this. Alternatively we can use an arrow function in the JSX itself instead of binding it 
         this.toggleNav  = this.toggleNav.bind(this);
    }
    toggleNav(){
        //We negate whaterver the state value maybe
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
  render() {
    return (
      //React Fragment ' <> </> ' or '<React.Fragment> </React.Fragment>' : Allows us to group together a bunch of react elements and then return it instead of enclosing it into one element (i.e inside a <div></div>). When we use a div for the same, a node gets added into the react DOM. But react fragment saves us a div as it does not get added into the DOM as a div
      <>
        <Navbar dark expand="md">
          <div className="container">
              <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                height="30"
                width="41"
                alt="Risorante Con Fusion"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-home fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Risorante Con Fusion</h1>
                <p>
                  {" "}
                  We take inspiration from the World's best cuisines,and create
                  a unique fusion experience.Our lipsmacking creation will
                  tickle your culinary senses!{" "}
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}

export default Header;
