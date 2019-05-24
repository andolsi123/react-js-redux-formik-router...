import React, { Component } from "react";
import Header from "./Header";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  render() {
    if (this.props.isValid && this.state.clicked) {
      return <Redirect push to="/" />;
    } else {
      return (
        <div>
          <Header />
          <Container>
            <Row className="justify-content-md-center mt-5">
              <Col xs={5}>
                <Form>
                  <div>
                    <label>Email address</label>
                    <Field
                      type="email"
                      placeholder="Enter email"
                      name="email"
                    />
                    {this.props.errors.email && this.props.touched.email ? (
                      <p>{this.props.errors.email}</p>
                    ) : null}
                  </div>

                  <div>
                    <label>First name</label>
                    <Field type="text" placeholder="name" name="name" />
                    {this.props.errors.name && this.props.touched.name ? (
                      <p>{this.props.errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label>Password</label>
                    <Field
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    {this.props.errors.password &&
                    this.props.touched.password ? (
                      <p>{this.props.errors.password}</p>
                    ) : null}
                  </div>

                  <Field component="select" name="gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </Field>

                  <label>
                    <Field
                      name="check"
                      type="checkbox"
                      checked={this.props.values.check}
                    />
                    agree on our terms.
                  </label>

                  <Button
                    variant="primary"
                    className="mr-3"
                    type="submit"
                    disabled={this.props.isSubmitting}
                    onClick={() => this.setState({ clicked: true })}
                  >
                    Submit
                  </Button>
                  <Link
                    to="/"
                    variant="primary"
                    className="btn btn-primary mt-3"
                  >
                    Login
                  </Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
    }
  }
}

const Formik = withFormik({
  mapPropsToValues({ email, password, name, check, gender }) {
    return {
      email: email || "",
      password: password || "",
      name: name || "",
      check: check || false,
      gender: gender || "male"
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .required()
      .min(7),
    name: Yup.string()
      .required()
      .min(3)
  }),
  handleSubmit(values, { resetForm }) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));
    resetForm();
  }
})(Signup);

export default Formik;
