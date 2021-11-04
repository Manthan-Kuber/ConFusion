import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   firstname: "",
    //   lastname: "",
    //   telnum: "",
    //   email: "",
    //   agree: false,
    //   contactType: "Tel.",
    //   message: "",
    //   // Check if a form element has been  modified or not. We validate an input box only if it has been touched(i.e modified)
    //   touched: {
    //     firstname: false,
    //     lastname: false,
    //     telnum: false,
    //     email: false,
    //   },
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleBlur = this.handleBlur.bind(this);
  }

  // Events which handle submit and input change

  // handleInputChange(event) {
  //   // Retrieve target input i.e the changed input
  //   const target = event.target;
  //   const value = target.type === "checkbox" ? target.checked : target.value;
  //   const name = target.name;

  //   //Set the modified state as current state of the target input
  //   this.setState({
  //     [name]: value,
  //   });
  // }
  handleSubmit(values) {
    console.log("Form Submitted. Current State is: " + JSON.stringify(values));
    alert("Form Submitted. Current State is: " + JSON.stringify(values));
    // event.preventDefault();
    // event.preventDefault() prevents the default behaviour of the page being reloaded wehn the form is submitted
  }

  // Invoked when a field is touched
  // handleBlur = (field) => (evt) => {
  //   this.setState({
  //     touched: { ...this.state.touched, [field]: true },
  //   });
  // };

  // Client sided form validations
  // validate(firstname, lastname, telnum, email) {
  //   const errors = {
  //     firstname: "",
  //     lastname: "",
  //     telnum: "",
  //     email: "",
  //   };

  //   if (this.state.touched.firstname && firstname.length < 3) {
  //     errors.firstname = "First Name should be >= to 3 characters";
  //   } else if (this.state.touched.firstname && firstname.length > 10) {
  //     errors.firstname = "First Name should be <= to 10 characters";
  //   }

  //   if (this.state.touched.lastname && lastname.length < 3) {
  //     errors.lastname = "Last Name should be >= to 3 characters";
  //   } else if (this.state.touched.lastname && lastname.length > 10) {
  //     errors.lastname = "Last Name should be <= to 10 characters";
  //   }

  //   // Regular expression to ensure that the telephone number only consists of integers
  //   const reg = /^\d+$/;
  //   if (this.state.touched.telnum && !reg.test(telnum)) {
  //     errors.telnum = "Tel. Number should contain only numbers";
  //   } else if (this.state.touched.telnum && telnum.length != 10) {
  //     errors.telnum = "Tel. Number should contain exactly 10 digits";
  //   }

  //   if (
  //     this.state.touched.email &&
  //     email.split("").filter((x) => x === "@").length !== 1
  //   ) {
  //     errors.email = "Email should contain a @";
  //   }

  //   return errors;
  // }

  render() {
    // const errors = this.validate(
    //   this.state.firstname,
    //   this.state.lastname,
    //   this.state.telnum,
    //   this.state.email
    // );
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact US</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-3">
            <h3>Send Us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9 mt-3">
            {/* Tie our form to use handle submit  */}
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                {/* We use htmlfor instead of using the generic 'for' (in the same way as we used className instead of class) */}
                <Label htmlfor="firstname" md={2}>
                  First Name
                </Label>
                {/* React Strap class instead of bootstrap class col-md-10 */}
                <Col md={10}>
                  {/* Now the form becomes a controlled form as we have introduced a state variable as the value attribute in the form */}
                  {/* To connect OnInputChange event handler to our forms, we need to add a onChange behaviour to the input of each of our form element */}
                  <Control.text
                    model=".firstname"
                    className="form-control"
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}
                    // value={this.state.firstname}
                    // valid={errors.firstname === ""}
                    // invalid={errors.firstname !== ""}
                    // onBlur={this.handleBlur("firstname")}
                    // onChange={this.handleInputChange}
                  />
                  <Errors
                  className='text-danger'
                  model='.firstname'
                  show='touched'
                  messages={{
                    required:'Required',
                    minLength:'Must be greater than 2 characters',
                    maxLength:'Must be 15 characters or less'
                  }} 
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor="firstname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    className="form-control"
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}
                    // value={this.state.lastname}
                    // valid={errors.lastname === ""}
                    // invalid={errors.lastname !== ""}
                    // onBlur={this.handleBlur("lastname")}
                    // onChange={this.handleInputChange}
                  />
                   <Errors
                  className='text-danger'
                  model='.lastname'
                  show='touched'
                  messages={{
                    required:'Required',
                    minLength:'Must be greater than 2 characters',
                    maxLength:'Must be 15 characters or less'
                  }} 
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    className="form-control"
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    validators={{required,minLength:minLength(3),maxLength:maxLength(15),isNumber}}
                    // value={this.state.telnum}
                    // valid={errors.telnum === ""}
                    // invalid={errors.telnum !== ""}
                    // onBlur={this.handleBlur("telnum")}
                    // onChange={this.handleInputChange}
                  />
                  <Errors
                  className='text-danger'
                  model='.telnum'
                  show='touched'
                  messages={{
                    required:' Required ',
                    minLength:' Must be greater than 2 numbers ',
                    maxLength:' Must be 15 characters or less ',
                    isNumber:' Must be a number '
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    validators={{required,validEmail}}
                    // value={this.state.email}
                    // valid={errors.email === ""}
                    // invalid={errors.email !== ""}
                    // onBlur={this.handleBlur("email")}
                    // onChange={this.handleInputChange}
                  />
                  <Errors
                  className='text-danger'
                  model='.email'
                  show='touched'
                  messages={{
                    required:'Required ',
                    validEmail:'Invalid Email Address '
                  }}/>
                </Col>
              </Row>
              <Row className="form-group">
                {/* Using a js object to specify properties */}
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <label check>
                      <Control.checkbox
                        model=".agree"
                        className="form-check-input"
                        name="agree"
                        // type="checkbox"
                        // checked={this.state.agree}
                        // onChange={this.handleInputChange}
                      />{" "}
                      <strong>May we contact you?</strong>
                    </label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    className="form-control"
                    type="select"
                    name="contactType"
                    // value={this.state.contactType}
                    // onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlfor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    className="form-control"
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    // value={this.state.message}
                    // onChange={this.handleInputChange}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
