import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// constructor(props) {
//   super(props); //Supply props to super class i.e the parent class(The component class is the parent class here)
//   // Creates a State which stores properties related to the component

//Render method returns what needs to be displayed on th UI by this component

//What we render is called as a view

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      //Whenever we create a list in react every attribute requires a key  which helps react to recognize each of the elements
      // Bootstrap classes used here will display cards one below each other if on smaller screen, else will display them side by side
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
      <div className="row">{menu}</div>
      <div className="row"></div>
    </div>
  );
};

export default Menu;