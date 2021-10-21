import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      //We return an empty div so that nothing will be rendered here as we cannot return null
      return <div></div>;
    }
  }
  renderComments(dish) {
    if (dish != null) {
      let myComments = dish["comments"];
      console.log(myComments);
      const cmnts = myComments.map((comment) => {
        let myDate = new Date(comment.date) 
        myDate = myDate.toLocaleString('en-US', {
          year: 'numeric', // numeric, 2-digit
          month: 'long', // numeric, 2-digit, long, short, narrow
          day: 'numeric'
      });
        return (
          <div>
            <li>{comment.comment}</li>
            <li>
              -- {comment.author} , {myDate.toLocaleString()}
            </li>
            <br/>
          </div>
        );
      });
      return (
        <Card>
          <CardBody>
            <CardTitle>
              <h4>Comments</h4>
            </CardTitle>
            <CardText>
              <ul class="list-unstyled">{cmnts}</ul>
            </CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="container">
        {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
        <div className="row">
          <div className="col-12 col-md-5 m-1 ">
            {this.renderDish(this.props.dishInfo)}
          </div>
          <div className="col-12 col-md-5 m-1 ">
            {this.renderComments(this.props.dishInfo)}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
