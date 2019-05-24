import React, { Component } from "react";
import DashboardHearder from "./DashboardHearder";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Todos from "./Todos";
import { connect } from "react-redux";
import { fetchLoacation, fetchWeather } from "../actions/postActions";
import { Route } from "react-router-dom";
import TodoDetails from "./TodoDeatils";
import createTod from "./CreateTod";
import { Link } from "react-router-dom";
import Counter from "./Counter";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  componentDidMount() {
    this.props.fetchLoacation();
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.api.loc) {
      this.props.fetchWeather(this.props.api.loc.country_name);
    }
  }

  render() {
    return (
      <div>
        <Container>
          <DashboardHearder />
          <Link to={`${this.props.match.url}/createTodo`} className="btn btn-dark mr-3" >Add todo</Link>
          <Link to={`${this.props.match.url}/counter`} className="btn btn-dark" >
            Counter with redux state
          </Link>
          <Row>
            <Col xs={6}>
              <Route path={`${this.props.match.url}`} exact component={Todos} />
              <Route
                path={`${this.props.match.url}/detail/:deatil`}
                component={TodoDetails}
              />
              <Route
                path={`${this.props.match.url}/createTodo`}
                component={createTod}
              />
              <Route
                path={`${this.props.match.url}/counter`}
                component={Counter}
              />
            </Col>
            <Col xs={6}>
              <Card style={{ width: "18rem" }} className="mt-5 mb-5">
                <Card.Body>
                  <Card.Title>YOUR LOCATION</Card.Title>
                  <Card.Text>
                    ip: {this.props.api.loc.ip} <br />
                    continent_name: {this.props.api.loc.continent_name} <br />
                    country_name: {this.props.api.loc.country_name} <br />
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>YOUR WEATHER</Card.Title>
                  <Card.Text>
                    last_updated:{" "}
                    {this.props.api.weth.current
                      ? this.props.api.weth.current.last_updated
                      : null}{" "}
                    <br />
                    temp_c:{" "}
                    {this.props.api.weth.current
                      ? this.props.api.weth.current.temp_c
                      : null}{" "}
                    <br />
                    description:{" "}
                    {this.props.api.weth.current
                      ? this.props.api.weth.current.condition.text
                      : null}{" "}
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        ;
      </div>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api
});

export default connect(mapStateToProps, { fetchLoacation, fetchWeather })(Dashboard);
