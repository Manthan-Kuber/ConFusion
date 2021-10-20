import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
//   renderComments(dish){
//       if(dish != null ){
//           return(
//               <Card>
//                   <CardBody>
//                       <CardTitle>Comments</CardTitle>
//                       <CardText>{dish.comments.rating}</CardText>
//                   </CardBody>
//               </Card>
//           );
//       }
//       else{
//           return (
//               <div></div>
//           )
//       }
//   }

  render() {
    return (
      <div className="container">
        {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
        <div className='row'>
                <div className='col col-md-5 m-1 '>
                    {this.renderDish(this.props.dishInfo)}
                </div>
                <div className='col col-md-5 m-1'>
                    {/* {this.renderComments(this.props.dishInfo)} */}
                </div>

            </div>
      </div>
    );
  }
}

export default DishDetail;
