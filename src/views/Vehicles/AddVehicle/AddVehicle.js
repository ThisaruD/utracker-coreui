import React, { useState, useEffect } from "react";
import {
  CardHeader,
  Card,
  CardBody,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormText,
  CardFooter,
  Button,
  Badge,
  Row,
} from "reactstrap";

import axios from "axios";

const AddVehicle = (props) => {
  const [vehicle_number, setVehicle_number] = useState("");
  const [type, setType] = useState("");
  const [driver_name, setDriver_name] = useState("");
  const [driver_contact_number, setDriver_contact_number] = useState("");
  const [owner_name, setOwner_name] = useState("");
  const [owner_contact_number, setOwner_contact_number] = useState("");
  const [unit_per_1km, setUnit_per_1km] = useState("");
  const [serial_number, setSerial_number] = useState("");
  const [status, setStatus] = useState("");

  //===========================should get this data from local storage==========================
  const [user_id, setUser_id] = useState("");
  const [companies_company_id, setCompanies_company_id] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
  const [errors, setErrors] = useState({});

  // const user = JSON.parse(localStorage.getItem('user'));
  //console.log(user.role_id);

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      console.log("hi");
      setIsLoggedIn(false);
    } else {
      setCompanies_company_id(localStorage.getItem("companies_company_id"));
      setUser_id(localStorage.getItem("user_id"));
    }
  });

  const validate = () => {
    let errors = {};

    let formIsValid = true;

    //vehicle_number
    if (!vehicle_number) {
      formIsValid = false;
      errors["vehicleNumber"] = "*Please Enter Vehicle Number";
    } else if (typeof vehicle_number !== "undefined") {
      //regex expression for vehicle_number

      var pattern = new RegExp(
        /^([a-zA-Z]{1,3}|((?!0*-)[0-9]{1,3}))-[0-9]{4}(?<!0{4})/
      );

      if (!pattern.test(vehicle_number)) {
        formIsValid = false;

        errors["vehicleNumber"] = "*Please Enter Valid Vehicle Number";
      }
    }

    //type
    if (!type) {
      formIsValid = false;

      errors["type"] = "*Please Select Vehicle Type";
    }

    //driver_name
    if (!driver_name) {
      formIsValid = false;

      errors["driver_name"] = "*Please Enter Driver Name";
    }

    if (typeof driver_name !== "undefined") {
      if (!driver_name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;

        errors["driver_name"] = "*Please Enter Alphabet Characters Only";
      }
    }

    // driver_contact_number
    if (!driver_contact_number) {
      formIsValid = false;

      errors["driver_contact_number"] = "*Please Enter Driver Contact Number";
    } else if (typeof driver_contact_number !== "undefined") {
      var pattern = new RegExp(
        /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
      );

      if (!pattern.test(driver_contact_number)) {
        formIsValid = false;

        errors["driver_contact_number"] = "*Please Enter Valid Contact Number";
      }
    }

    //owner_name
    if (!owner_name) {
      formIsValid = false;

      errors["owner_name"] = "*Please Enter Owner Name";
    }

    if (typeof owner_name !== "undefined") {
      if (!owner_name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;

        errors["owner_name"] = "*Please Enter Alphabet Characters Only";
      }
    }

    //owner_contact_number
    if (!owner_contact_number) {
      formIsValid = false;

      errors["owner_contact_number"] = "*Please Enter Owner Contact Number";
    } else if (typeof owner_contact_number !== "undefined") {
      var pattern = new RegExp(
        /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
      );

      if (!pattern.test(owner_contact_number)) {
        formIsValid = false;

        errors["owner_contact_number"] = "*Please Enter Valid Contact Number";
      }
    }

    // //unit_per_1km
    if (!unit_per_1km) {
      formIsValid = false;

      errors["unit_per_1km"] = "*Please Select Rate";
    }

    // serial_number
    if (!serial_number) {
      formIsValid = false;

      errors["serial_number"] = "*Please Enter Device Serial Number";
    } else if (typeof serial_number !== "undefined") {
      //regex expression for serial_number validation

      var pattern = new RegExp(/^CN(?=\d{0,3}[1-9])\d{7}$/);

      if (!pattern.test(serial_number)) {
        formIsValid = false;

        errors["serial_number"] = "*Please Enter Valid Serial Number";
      }
    }

    //status
    if (!status) {
      formIsValid = false;

      errors["status"] = "*Please Select Device Status";
    }

    setErrors(errors);

    return formIsValid;
  };

  const submitFunc = (e) => {
    e.preventDefault();
    if (validate()) {
      const vehicleDetails = {
        vehicle_number,
        type,
        driver_name,
        driver_contact_number,
        owner_name,
        owner_contact_number,
        unit_per_1km,
        serial_number,
        status,
        companies_company_id,
      };
      console.log(vehicleDetails);

      axios
        .post(
          "http://localhost:8000/api/savevehicledetails/" + user_id,
          vehicleDetails,
          {
            headers: {
              "content-type": "application/json",
              Authorization: "Bearer" + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          //handling success part
          console.log(res.data);
          alert("Vehicle Added Successfully");
          setVehicle_number("");
          setType("");
          setOwner_name("");
          setDriver_name("");
          setOwner_contact_number("");
          setDriver_contact_number("");
          setUnit_per_1km("");
          setSerial_number("");
          setStatus("");
        })
        .catch((err) => {
          //handling error part
          console.log(err);
        });
    }
  };

  const resetFunc = (e) => {
    setVehicle_number("");
    setType("");
    setDriver_name("");
    setDriver_contact_number("");
    setUnit_per_1km("");
    setSerial_number("");
    setStatus("");
  };

  const backToLogin = () => {
    props.history.push("/login");
  };

  if (isLoggedIn === true) {
    return (
      <div>
        <Card>
          <CardHeader>
            <strong>Add Vehicles</strong>
          </CardHeader>
          <CardBody>
            <Form
              action=""
              encType="multipart/form-data"
              className="form-horizontal"
            >
              <FormGroup row>
                <Col md="3">
                  <Label></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">
                    You can add new vehicle to the system here
                  </p>
                  <p className="form-control-static">All field required</p>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Vehicle Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="vehicle-number"
                    name="vehicle-number"
                    placeholder="Vehicle Number"
                    value={vehicle_number}
                    onChange={(e) => setVehicle_number(e.target.value)}
                  />
                  <FormText color="muted">Please enter vehicle number</FormText>
                  <div style={{ color: "red" }}>{errors.vehicleNumber}</div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Type</Label>
                  <Input
                    required
                    type="select"
                    name="type"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="0">Please select type</option>
                    <option value="Van">Van</option>
                    <option value="Car">Car</option>
                    <option value="Bus">Bus</option>
                    <option value="Truck">Truck</option>
                  </Input>
                  <div style={{ color: "red" }}>{errors.type}</div>
                </Col>
                <Col md="6"></Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>Driver Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="driver-name"
                    name="driver-name"
                    placeholder="Driver Name"
                    value={driver_name}
                    onChange={(e) => setDriver_name(e.target.value)}
                  />
                  <FormText className="help-block">Enter driver name</FormText>
                  <div style={{ color: "red" }}>{errors.driver_name}</div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>Driver Contact Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="driver-contact-number"
                    name="driver-contact-number"
                    placeholder="Driver Contact Number"
                    // autoComplete="text"
                    value={driver_contact_number}
                    onChange={(e) => setDriver_contact_number(e.target.value)}
                  />
                  <FormText className="help-block">
                    Enter driver contact number
                  </FormText>
                  <div style={{ color: "red" }}>
                    {errors.driver_contact_number}
                  </div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>Owner Name</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="owner-name"
                    name="owner-name"
                    placeholder="Owner Name"
                    value={owner_name}
                    onChange={(e) => setOwner_name(e.target.value)}
                  />
                  <FormText className="help-block">Enter owner name</FormText>
                  <div style={{ color: "red" }}>{errors.owner_name}</div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>Owner Contact Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="owner-contact-number"
                    name="owner-contact-number"
                    placeholder="Owner Contact Number"
                    value={owner_contact_number}
                    onChange={(e) => setOwner_contact_number(e.target.value)}
                  />
                  <FormText className="help-block">
                    Enter owner contact number
                  </FormText>
                  <div style={{ color: "red" }}>
                    {errors.owner_contact_number}
                  </div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>Unit per Km</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="select"
                    name="unit-per-km"
                    id="unit-per-km"
                    value={unit_per_1km}
                    onChange={(e) => setUnit_per_1km(e.target.value)}
                  >
                    <option value="0">Please select</option>
                    <option value="100">Rs:100</option>
                    <option value="200">Rs:200</option>
                    <option value="300">Rs:300</option>
                  </Input>
                  <div style={{ color: "red" }}>{errors.unit_per_1km}</div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Device Serial Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="device-serial-number"
                    name="device-serial-number"
                    placeholder="device-serial-number"
                    value={serial_number}
                    onChange={(e) => setSerial_number(e.target.value)}
                  />
                  <FormText color="muted">
                    Please enter vehicle GPS device serial number
                  </FormText>
                  <div style={{ color: "red" }}>{errors.serial_number}</div>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Device Status</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="select"
                    id="device-status"
                    name="device-status"
                    placeholder="device-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Please select</option>
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                  </Input>
                  <FormText color="muted">
                    Please enter GPS device status
                  </FormText>
                  <div style={{ color: "red" }}>{errors.status}</div>
                </Col>
              </FormGroup>

              <Button
                style={{ margin: "2px" }}
                type="submit"
                size="sm"
                color="primary"
                onClick={submitFunc}
              >
                <i className="fa fa-dot-circle-o" /> Submit
              </Button>

              <Button
                style={{ margin: "2px" }}
                type="reset"
                size="sm"
                color="danger"
                onClick={resetFunc}
              >
                <i className="fa fa-ban" /> Reset
              </Button>
            </Form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  } else if (isLoggedIn === false) {
    return (
      <div className="access_denied">
        <Card className="text-white bg-primary ">
          <CardBody>
            <div className="clearfix">
              {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
              <h4 className="pt-3">Please login First</h4>
              <p className="text-muted float-left">
                You don't have permission to access requested page. Please login
                first
              </p>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <Button
                    block
                    color="dark"
                    className="btn-pill"
                    onClick={backToLogin}
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

export default AddVehicle;
