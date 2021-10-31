import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Component } from "react";
import DishDetail from "./DishDetail";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";

class Main extends Component {
  // We need to define the state in here for which we need a constructor to do so
  constructor(props) {
    super(props);
    console.log(this.state);
    //Lifting the state up
    this.state = {
      //Whenever we click on a dishes,then we will make the dish information equal to the selected dish
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      
        return (
          <DishDetail
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === parseInt(match.params.dishId, 10))[0]
              }
            comments={
              this.state.comments.filter(
                (comment) =>
                  comment.dishId === parseInt(match.params.dishId, 10))
            }
          />
        );
      
      
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
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
