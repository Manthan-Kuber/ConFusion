import React,{Component} from 'react';
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";


class Header extends Component {
    render(){
        return(
            //React Fragment ' <> </> ' or '<React.Fragment> </React.Fragment>' : Allows us to group together a bunch of react elements and then return it instead of enclosing it into one element (i.e inside a <div></div>). When we use a div for the same, a node gets added into the react DOM. But react fragment saves us a div as it does not get added into the DOM as a div 
            <>
            <Navbar dark>
                <div className='container'>
                <NavbarBrand href="/">Risorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Jumbotron>
                <div className='container'>
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Risorante Con Fusion</h1>
                            <p> We take inspiration from the World's best cuisines,and create a unique fusion experience.Our lipsmacking creation will tickle your culinary senses! </p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </>
        );
    }
}

export default Header;