import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
  if (comments != null) {
    const cmnts = comments.map((comment) => {
      let myDate = new Date(comment.date);
      myDate = myDate.toLocaleString("en-US", {
        year: "numeric", // numeric, 2-digit
        month: "long", // numeric, 2-digit, long, short, narrow
        day: "numeric",
      });
      return (
        <div className="container">
          <div>
            <li>{comment.comment}</li>
            <li>
              -- {comment.author} , {myDate.toLocaleString()}
            </li>
            <br />
          </div>
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
          <CommentForm />
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    console.log("Form Submitted. Current State is: " + JSON.stringify(values));
    alert("Form Submitted. Current State is: " + JSON.stringify(values));
  }

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="Rating" md={10}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model="rating"
                    className="form-control"
                    type="select"
                    name="rating"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor="author" md={10}>
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".author"
                    className="form-control"
                    type="text"
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor='comments' md={10}>Comment</Label>
                <Col md={10}>
                  <Control.textarea
                  model='.comments'
                  className='form-control'
                  type='textarea'
                  id='message'
                  name='message'
                  rows='5'
                   />
                </Col>
              </Row>
              <Button type='submit' color='primary'>Submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
        {/* Bootstrap 4 class which divides each row into a grid of 12 columns */}
        <div className="row">
          <div className="col-12 col-md-5 m-1 ">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1 ">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
