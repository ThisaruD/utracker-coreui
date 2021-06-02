import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import Map from "./Map";
import { convertNeSwToNwSe } from "google-map-react";
import Message from "../../Required Sample Pages/Message";

class PreviousPaths extends Component {
  constructor(props) {
    super(props);
    this.submitFunc = this.submitFunc.bind(this);
    this.backToLogin = this.backToLogin.bind(this);
    this.validate = this.validate.bind(this);

    this.state = {
      vehicle_number: "",
      from_date: "",
      from_time: "",
      to_date: "",
      to_time: "",
      user_id: "2",
      vehicles: [],
      path: [],
      isLoggedIn: true,
      errors: {},
      userRoleId: "",
    };
  }

  componentDidUpdate() {
    console.log("path");
    console.log(this.state.path);
  }

  componentDidMount() {
    let user = localStorage.getItem("user_id");

    this.setState({
      userRoleId: localStorage.getItem("user_role_id"),
    });

    if (user == undefined) {
      this.setState({
        isLoggedIn: false,
      });
    } else {
      axios
        .get(
          "http://localhost:8000/api/allvehiclenumbers/" +
            localStorage.getItem("user_id"),
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
          this.setState({ vehicles: res.data.vehicles });
        })
        .catch((err) => {
          //handle error
          console.log(err);
        });
    }
  }

  //replace(/-/g,"/")
  backToLogin() {
    this.props.history.push("/login");
  }

  submitFunc(e) {
    e.preventDefault();

    if (this.validate()) {
      const obj = {
        vehicle_number: this.state.vehicle_number,
        from_date: "3/15/2021",
        from_time: this.state.from_time,
        to_date: "3/15/2021",
        to_time: this.state.to_time,
      };

      console.log(obj);
      axios
        .get("http://localhost:8000/api/getvehiclepath", {
          params: obj,
        })
        .then((res) => {
          if (res.data.GPS_PATH_DATA.length == 0) {
            alert("There is no data for this time range !!!");
          } else {
            let tempPath = [];
            for (let i = 0; i < res.data.GPS_PATH_DATA.length; i++) {
              let coordinates = {
                lat: res.data.GPS_PATH_DATA[i].latitude * 1,
                lng: res.data.GPS_PATH_DATA[i].longitude * 1,
              };

              tempPath.push(coordinates);
            }
            this.setState({ path: tempPath });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        vehicle_number: "",
        // from_date: "",
        from_time: "",
        // to_date: "",
        to_time: "",
      });
    }
    // console.log(this.state.path);
  }

  //refresh
  refreshPage() {
    window.location.reload();
  }

  //Validation
  validate() {
    let errors = {};

    let isValid = true;

    //vehicle number
    if (!this.state.vehicle_number) {
      isValid = false;

      errors["vehicle_number"] = "*Please Select a Vehicle";
    }

    //from_time
    if (!this.state.from_time) {
      isValid = false;
      errors["from_time"] = "*Please Enter Time";
    } else if (this.state.from_time !== "undefined") {
      var pattern = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

      if (!pattern.test(this.state.from_time)) {
        isValid = false;
        errors["from_time"] = "*Please Enter Correct Time Format (HH:MM)";
      }
    }

    //to_time
    if (!this.state.to_time) {
      isValid = false;
      errors["to_time"] = "*Please Enter Time";
    } else if (this.state.to_time !== "undefined") {
      var pattern = new RegExp(/^([01]\d|2[0-3]):?([0-5]\d)$/);

      if (!pattern.test(this.state.to_time)) {
        isValid = false;
        errors["to_time"] = "*Please Enter Correct Time Format (HH:MM)";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    if (this.state.isLoggedIn == true) {
      if (this.state.userRoleId == 1) {
        return (
          <div>
            <Message variant="danger">
              You Don't Have Permission For Location Tab
            </Message>
          </div>
        );
      } else {
        return (
          <div>
            {/* <h1>This is previous paths tab</h1> */}
            <br></br>
            <Row>
              <Col xs="12" lg="9">
                <Card>
                  <CardHeader>
                    <strong>Enter Details</strong>
                    {/* <small> For vehicles previous path </small> */}
                  </CardHeader>
                  <br />
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
                                <b>Select Vehicle Number</b>
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
                                ))}{" "}
                              </Input>
                              <div style={{ color: "red" }}>
                                {this.state.errors.vehicle_number}
                              </div>
                            </Col>
                          </FormGroup>
                        </Col>
                      </Row>
                      <br />
                      <Row>
                        <p className="PrevPath_02">
                          <b>From</b>
                        </p>
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
                                this.setState({ from_date: e.target.value });
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
                              placeholder="HH:MM"
                              maxlength="5"
                              value={this.state.from_time}
                              onChange={(e) => {
                                this.setState({ from_time: e.target.value });
                              }}
                            />
                            <div style={{ color: "red" }}>
                              {this.state.errors.from_time}
                            </div>
                          </FormGroup>
                        </Col>
                        <Col xs="4"></Col>
                      </Row>
                      <br />
                      <Row>
                        <p className="PrevPath_02">
                          <b>To</b>
                        </p>
                      </Row>
                      <Row>
                        <Col xs="6">
                          <FormGroup>
                            <Label htmlFor="date2">Date</Label>
                            <Input
                              type="date"
                              format="yyyy-MM-dd"
                              name="date2"
                              id="date2"
                              value={this.state.to_date}
                              onChange={(e) => {
                                this.setState({ to_date: e.target.value });
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
                              maxlength="5"
                              placeholder="HH:MM"
                              value={this.state.to_time}
                              onChange={(e) => {
                                this.setState({ to_time: e.target.value });
                              }}
                            />
                            <div style={{ color: "red" }}>
                              {this.state.errors.to_time}
                            </div>
                          </FormGroup>
                        </Col>
                        <Col xs="4"></Col>
                        <br />
                      </Row>
                      <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                        <div className="PrevPath_03">
                          <Button
                            className="PrevPath"
                            type="submit"
                            size="sm"
                            color="primary"
                          >
                            Get Path
                          </Button>

                          <Button
                            className="PrevPath"
                            type="refresh"
                            size="sm"
                            color="danger"
                            onClick={this.refreshPage}
                          >
                            Refresh
                          </Button>
                        </div>
                      </Col>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <div>
              <Map pathCoordinates={this.state.path} />
            </div>
          </div>
        );
      }
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
  }
}

export default PreviousPaths;
