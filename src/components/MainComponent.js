import Menu from "./MenuComponent";
import { Component } from "react";
import DishDetail from "./DishDetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { connect } from "react-redux";
import { addComment } from "../redux/ActionCreators";

// This will map redux's store's state into props so that they become available to our component
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment((dishId, rating, author, comment))),
});

class Main extends Component {
  // We need to define the state in here for which we need a constructor to do so
  constructor(props) {
    super(props);
    console.log(this.state);
    //Lifting the state up
    // this.state = {
    //Whenever we click on a dishes,then we will make the dish information equal to the selected dish
    // };
    // We removed state from here and now will obtain state information form the redux store
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//Connect redux with main component. withRouter used to connect component to React Router
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
