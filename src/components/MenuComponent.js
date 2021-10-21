import React, { Component } from "react";
import {Card, CardImg , CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import DishDetail from "./DishDetail";

class Menu extends Component {
  constructor(props) {
    super(props); //Supply props to super class i.e the parent class(The component class is the parent class here)
    // Creates a State which stores properties related to the component
    this.state ={
      //Whenever we click on a dishes,then we will make the dish information equal to the selected dish
        selectedDish : null
    }
  }

  onDishSelect(dish){
    //We need to use this.setState function call when we want to change the state. We cannot do selectedDish = dish
    this.setState({selectedDish : dish});
  }

  renderDish(dish){
    if(dish != null ){
      return (
        <Card>
          <CardImg width='100%' src={dish.image} alt={dish.name} />
          <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        );
    }
    else{
      //We return an empty div so that nothing will be rendered here as we cannot return null
      return (
        <div></div>
      )
    }
  }

  //Render method returns what needs to be displayed on th UI by this component
  render() {
    //What we render is called as a view
    const menu = this.props.dishes.map((dish) =>{
        return(
             //Whenever we create a list in react every attribute requires a key  which helps react to recognize each of the elements
             // Bootstrap classes used here will display cards one below each other if on smaller screen, else will display them side by side
             <div key={dish.id} className='col-12 col-md-5 m-1'> 
                <Card onClick={() => this.onDishSelect(dish) }>
                      <CardImg width='100%' src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                </Card>
            </div>
        );
    }) ;
    return (
      <div className="container">
           {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
           <div className="row">
             {menu}
          </div>
          <div className="row">
          <DishDetail dishInfo = {this.state.selectedDish} />
          </div>
      </div>
    );
  }
}

export default Menu;
