import React, {Component, useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, FormText, Input, Label, Row} from "reactstrap";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";
import Message from "../../Required Sample Pages/Message";


class PreviousLocation extends Component {

  constructor(props) {
    super(props);
    this.submitFunc = this.submitFunc.bind(this);
    this.validate = this.validate.bind(this);
    // this.refreshPage = this.refreshPage.bind(this);

    this.state = {
      date: "",
      time: "",
      vehicle_number: "",
      vehicles: [],
      isLoggedIn: true,
      vehiclesLongLat: [],
      status: false,
      errors: {},
      userRoleId: ''
    }
  }

  componentDidMount() {

    let user = localStorage.getItem("user_id");

    this.setState({
      userRoleId: localStorage.getItem('user_role_id')
    });


    if (user == undefined) {
      this.setState({
        isLoggedIn: false
      });
    } else {

      axios.get('http://localhost:8000/api/allvehiclenumbers/' + localStorage.getItem("user_id"), {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
        .then(res => {
          //handle response data
          console.log(res.data);
          this.setState({vehicles: res.data.vehicles})

        })
        .catch((err) => {
          //handle error
          console.log(err);
        })
    }
  }


  backToLogin = ()=> {
    this.props.history.push('/login');
  }

  refreshPage(){
    window.location.reload();
  }

  backHandler(){
    this.props.history.push('/dashboard');
  }

  //regular expression function for time
  validate() {
    let errors = {};

    let isValid = true;

    //time
    if (!this.state.time) {
      isValid = false;
      errors["time"] = "*Please enter correct time format.";
    }

    if (this.state.time !== undefined) {
      var pattern = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

    }

    if (!pattern.test(this.state.time)) {
      isValid = false;
      errors["time"] = "*Please enter correct time format.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }

  async submitFunc(e) {
    e.preventDefault();

    if (this.validate()) {

      await axios.get('http://localhost:8000/api/previouslocation', {
        params: {
          vehicle_number: this.state.vehicle_number,
          date: "2021/03/15",
          time: this.state.time
        }
      })
        .then((res) => {
          console.log(res.data);

          if (res.data.GPS_DATA.length == 0) {
            alert('Not found GPS data for this time');

          } else {
            const coordinates = {
              lat: res.data.GPS_DATA[0].latitude,
              lng: res.data.GPS_DATA[0].longitude
            }

            this.state.vehiclesLongLat.push(coordinates);

            this.setState({
              status: true
            });
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }


  }


  render() {
    if (this.state.isLoggedIn === true) {

      if (this.state.userRoleId == 1) {
        return (
          <div>
            <Message variant='danger'>You Don't Have Permission For Location Tab</Message>
          </div>
        );
      } else {
        return (
          <div>
            <h3>Check vehicles previous location here...</h3>
            <Row>
              <Col xs="12" lg="6">
                <div>
                  {this.state.status ?
                    <Map
                      google={this.props.google} zoom={9}
                      initialCenter={{
                        lat: 7.0146334,
                        lng: 79.9676378,
                        accuracy: 20
                      }}>
                      {this.state.vehiclesLongLat.map((store, index) => {
                        return (<Marker key={index} id={index} position={{
                          lat: store.lat,
                          lng: store.lng
                        }}
                        />)

                      })}

                    </Map>
                    : <h6>
                      <center>Map Showing here</center>
                      <center>Please select vehicle number and time for get location</center>
                    </h6>}
                </div>
              </Col>
              <Col xs="12" lg="6">


                <Card>
                  <CardHeader>
                    <strong>Enter Details</strong>
                    <small>For Previous Location</small>
                  </CardHeader>
                  <CardBody>
                    <Form

                    >
                      <Row>
                        <Col xs="12">
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12">


                          <FormGroup row>
                            <Col md="3">
                              <Label htmlFor="select">Select Vehicle Number</Label>
                            </Col>
                            <Col xs="12" md="9">
                              <Input type="select"
                                     name="select"
                                     id="select"
                                     onChange={(e) => this.setState({vehicle_number: e.target.value})}
                              >
                                <option value="0">Please select</option>
                                {this.state.vehicles.map((vehicle, index) => (
                                  <option
                                    key={index}
                                    values={this.state.vehicle}
                                  > {vehicle}</option>

                                ))}
                              </Input>
                            </Col>
                          </FormGroup>


                        </Col>
                      </Row>
                      <Row>
                        <Col xs="6">
                          <FormGroup>
                            <Label htmlFor="date">Date</Label>
                            <Input
                              type="date"
                              value={this.state.date}
                              onChange={(e) => {
                                this.setState({date: e.target.value})
                              }}

                            />

                          </FormGroup>
                        </Col>
                        <Col xs="4">
                          <FormGroup>
                            <Label htmlFor="time">Time</Label>
                            <Input
                              type="text"
                              min="0:00"
                              maxlength='5'
                              value={this.state.time}
                              onChange={(e) => this.setState({time: e.target.value})}

                            />
                            <FormText color="muted">Please enter time in correct format(HH:MM/24h format)</FormText>
                            <div style={{color: "red"}}>{this.state.errors.time}</div>
                          </FormGroup>
                        </Col>
                        <Col xs="4">

                        </Col>
                      </Row>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                        <Row>

                          <Button
                            className="PrevPath"
                            type="refresh"
                            size="sm"
                            color="danger"
                            onClick={this.refreshPage}
                          >Refresh
                          </Button>

                          <Button
                            block color="primary"
                            className="PrevPath"
                            onClick={this.submitFunc}
                          >Get Location
                          </Button>

                          <Button
                            className="PrevPath"
                            size="sm"
                            color="secondary"
                            onClick={this.backHandler}
                          >Back
                          </Button>


                        </Row>
                      </Col>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        );

      }


    } else if (this.state.isLoggedIn === false) {
      return (
        <div className="access_denied">
          <Card className="text-white bg-primary ">
            <CardBody>
              <div className="clearfix">
                {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
                <h4 className="pt-3">Please login First</h4>
                <p className="text-muted float-left">
                  You don't have permission to access requested page. Please login first
                </p>
                <p className="text-muted float-left">
                  Please login first
                </p>

                <Row>
                  <Col md="4"></Col>
                  <Col md="4">
                    <Button
                      block color="dark"
                      className="btn-pill"
                      onClick={this.backToLogin}
                    >Login</Button>

                  </Col>
                  <Col md="4"></Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      );

    }


  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(PreviousLocation)
