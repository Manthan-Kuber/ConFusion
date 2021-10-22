import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import DishDetail from "./DishDetail";

class Main extends Component {
  // We need to define the state in here for which we need a constructor to do so
  constructor(props) {
    super(props);

    //Lifting the state up
    this.state ={
        //Whenever we click on a dishes,then we will make the dish information equal to the selected dish
        dishes:DISHES,
        selectedDish : null
      }
  }
  onDishSelect(dishId){
    //We need to use this.setState function call when we want to change the state. We cannot do selectedDish = dish
    this.setState({selectedDish : dishId});
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Risorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} 
        onClick = {(dishId) => this.onDishSelect(dishId)} />
        {/* For Each Dish filter items such that Selected dish id === dish id */}
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
      </div>
    );
  }
}

export default Main;
