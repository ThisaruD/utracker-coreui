import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Polyline,
  Marker,
} from "react-google-maps";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup, FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import {array} from "prop-types";

class PreviousPath extends React.Component {
  //PreviousPath
  constructor(props) {
    super(props);
    this.submitFunc = this.submitFunc.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      vehicle_number: "HK-1234",
      from_date: "3/15/2021",
      from_time: "",
      to_date: "3/15/2021",
      to_time: "",
      user_id: "2",
      vehicles: [],
      // vehicleLatLng: [],
      path: [],
      isLoggedIn: true,
      progress: [],
      status: false,
      errors: {}
    };
  }

  componentDidMount() {
    let user = localStorage.getItem("user_id");

    if (user == undefined) {
      this.setState({
        isLoggedIn: false,
      });
    } else {
      axios.get("http://localhost:8000/api/allvehiclenumbers/" + localStorage.getItem("user_id"),
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer" + localStorage.getItem("token"),
          },
        }
      )
        .then((res) => {
          //handle response data
          console.log(res);
          //setVehicles(res.data.vehicles);
          this.setState({vehicles: res.data.vehicles});
        })
        .catch((err) => {
          //handle error
          console.log(err);
        });
    }
  }

  backToLogin() {
    this.props.history.push("/login");
  }


  //regular expression function for time
  validate() {
    let errors = {};

    let isValid = true;

    //time


    if (this.state.from_time !== undefined) {
      var pattern = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

    }else if(this.state.to_time !== undefined){
      var pattern = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);
    }

    if (!pattern.test(this.state.to_time)) {
      isValid = false;
      errors["time"] = "*Please enter correct time format.";
    }else if(!pattern.test(this.state.from_time)){
      isValid = false;
      errors["time"] = "*Please enter correct time format.";
    }

    this.setState({
      errors: errors
    });

    return isValid;
  }


  submitFunc(e) {
    e.preventDefault();

    // const obj = {
    //   vehicle_number: this.state.vehicle_number,
    //   from_date: this.state.from_date.replace(/-/g, "/"),
    //   from_time: this.state.from_time,
    //   to_date: this.state.to_date.replace(/-/g, "/"),
    //   to_time: this.state.to_time,
    // };


    if (this.validate()) {

      axios.get("http://localhost:8000/api/getvehiclepath", {
        params: {
          vehicle_number: this.state.vehicle_number,
          from_date: "3/15/2021",
          from_time: this.state.from_time,
          to_date: "3/15/2021",
          to_time: this.state.to_time

        }
      })
        .then((res) => {

          res.data["GPS_PATH_DATA"].map(value => {
            // console.log(value.vehiclenum)
            let coordinate = {
              lat: value.latitude * 1,
              lng: value.longitude * 1,
            };
            this.state.path.push(coordinate);
          });


          this.setState({
            status: true,
          });

          console.log(this.state.path);
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }


  render = () => {
    if (this.state.isLoggedIn == true) {
      return (
        <div>
          <h1>This is previous paths tab</h1>
          <br></br>
          <Row>
            <Col xs="12" lg="9">
              <Card>
                <CardHeader>
                  <strong>Enter Details</strong>
                  <small> For vehicles previous path </small>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.submitFunc}>
                    <Row>
                      <Col xs="12"></Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="select">
                              Select Vehicle Number
                            </Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input
                              type="select"
                              name="select"
                              id="select"
                              value={this.state.vehicle_number}
                              onChange={(e) =>
                                this.setState({
                                  vehicle_number: e.target.value,
                                })
                              }
                            >
                              <option value="0">Please select</option>
                              {this.state.vehicles.map((vehicle) => (
                                <option values={this.state.vehicle}>

                                  {vehicle}
                                </option>
                              ))} }
                            </Input>
                          </Col>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <p>From</p>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="date1">Date</Label>
                          <Input
                            type="date"
                            format="yyyy-MM-dd"
                            name="date1"
                            id="date1"
                            value={this.state.from_date}
                            onChange={(e) => {
                              this.setState({from_date: e.target.value});
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="4">
                        <FormGroup>
                          <Label htmlFor="time1">Time</Label>
                          <Input
                            type="text"
                            name="time1"
                            id="time1"
                            value={this.state.from_time}
                            onChange={(e) => {
                              this.setState({from_time: e.target.value});
                            }}
                          />
                          <FormText color="muted">Please enter time in correct format(HH:MM)</FormText>
                          <div style={{color: "red"}}>{this.state.errors.time}</div>
                        </FormGroup>
                      </Col>
                      <Col xs="4"></Col>
                    </Row>
                    <Row>
                      <p>To</p>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="date2">Date</Label>
                          <Input
                            type="text"
                            name="date2"
                            id="date2"
                            value={this.state.to_date}
                            onChange={(e) => {
                              this.setState({to_date: e.target.value});
                            }}
                          />
                        </FormGroup>
                      </Col>
                      <Col xs="4">
                        <FormGroup>
                          <Label htmlFor="time2">Time</Label>
                          <Input
                            type="text"
                            name="time2"
                            id="time2"
                            value={this.state.to_time}
                            onChange={(e) => {
                              this.setState({to_time: e.target.value});
                            }}
                          />
                          <FormText color="muted">Please enter time in correct format(HH:MM)</FormText>
                          <div style={{color: "red"}}>{this.state.errors.time}</div>
                        </FormGroup>
                      </Col>
                      <Col xs="4"></Col>
                    </Row>
                    <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                      <Button
                        block
                        color="primary"
                        className="btn-pill"
                        type="submit"
                      >
                        Get Path
                      </Button>
                    </Col>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div>
            {this.state.status ? (
              <GoogleMap
                defaultZoom={16}
                defaultCenter={{lat: 6.8667528, lng: 79.8769134}}
              >
                <Polyline
                  path={this.state.path}
                  options={{strokeColor: "#FF0000 "}}
                />
                <Marker position={this.state.path[this.state.path.length - 1]}/>
              </GoogleMap>
            ) : <h6>map showing here</h6>}
          </div>
        </div>
      );
    } else if (this.state.isLoggedIn == false) {
      return (
        <div className="access_denied">
          <Card className="text-white bg-primary ">
            <CardBody>
              <div className="clearfix">
                {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
                <h4 className="pt-3">Please login First</h4>
                <p className="text-muted float-left">
                  You don't have permission to access requested page. Please
                  login first
                </p>
                <p className="text-muted float-left">Please login first</p>

                <Row>
                  <Col md="4"></Col>
                  <Col md="4">
                    <Button
                      block
                      color="dark"
                      className="btn-pill"
                      onClick={this.backToLogin}
                    >
                      Login
                    </Button>
                  </Col>
                  <Col md="4"></Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      );
    }
  };
}

const MapComponent = withScriptjs(withGoogleMap(PreviousPath));

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{height: `100%`}}/>}
    containerElement={<div style={{height: `400px`, width: "940px"}}/>}
    mapElement={<div style={{height: `100%`}}/>}
  />
);
