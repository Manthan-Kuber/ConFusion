import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { Component } from "react";
import DishDetail from "./DishDetail";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, Router } from "react-router-dom";

class Main extends Component {
  // We need to define the state in here for which we need a constructor to do so
  constructor(props) {
    super(props);

    //Lifting the state up
    this.state = {
      //Whenever we click on a dishes,then we will make the dish information equal to the selected dish
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        {/* Enclose routes using switch */}
          <Switch>
              <Route path="/home" component={HomePage} />
              {/* Using functional component so that we can pass props */}
              <Route
                exact
                path=" /menu"
                component={() => <Menu dishes={this.state.dishes} />}
              />
              <Redirect to="/home" />
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
