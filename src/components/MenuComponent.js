import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import {baseUrl} from '../shared/baseUrl'

function RenderMenuItem({ dish, onClick }) {
  {console.log(dish)}
  return (
    <Card>
      <Link to={`/menu/${dish._id}`}>
        {" "}
        {/* Using backtics to pass variable in a string */}
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// constructor(props) {
//   super(props); //Supply props to super class i.e the parent class(The component class is the parent class here)
//   // Creates a State which stores properties related to the component

//Render method returns what needs to be displayed on th UI by this component

//What we render is called as a view

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish) => {
    return (
      //Whenever we create a list in react every attribute requires a key  which helps react to recognize each of the elements
      // Bootstrap classes used here will display cards one below each other if on smaller screen, else will display them side by side
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.dishes.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
        <div className="row">{menu}</div>
        <div className="row"></div>
      </div>
    );
  }
};

export default Menu;
