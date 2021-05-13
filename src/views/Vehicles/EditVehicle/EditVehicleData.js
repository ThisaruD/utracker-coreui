import React, { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";

const EditVehicleData = (props) => {
  const [vehicle_number, setVehicle_number] = useState("");
  const [type, setType] = useState("");
  const [unit_per_1km, setUnit_per_1km] = useState("");
  const [driver_name, setDriver_name] = useState("");
  const [driver_contact_number, setDriver_contact_number] = useState("");
  const [owner_name, setOwner_name] = useState("");
  const [owner_contact_number, setOwner_contact_number] = useState("");
  const [serial_number, setSerial_number] = useState("");
  const [status, setStatus] = useState("");
  const [vehicleId, setVehicleId] = useState("");

  const [date, setDate] = useState("");
  const [user_id, setUser_id] = useState("1");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    //vehicle numbers pass
    axios
      .get("http://localhost:8000/api/getvehicledetails", {
        params: { vehicle_number: props.match.params.id },
      })
      .then((res) => {
        setVehicleId(res.data.vehicle_id);
        setVehicle_number(res.data.vehicle_num);
        setType(res.data.type1);
        setUnit_per_1km(res.data.unit_per_1km);
        setDriver_name(res.data.driver_name);
        setDriver_contact_number(res.data.driver_contact_no);
        setOwner_name(res.data.owner_name);
        setOwner_contact_number(res.data.owner_contact_no);
        setSerial_number(res.data.serial_number);
        setStatus(res.data.status1);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const validate = () => {
    let errors = {};

    let formIsValid = true;

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

          errors["driver_contact_number"] =
            "*Please Enter Valid Contact Number";
        }
      }

      //owner_name
      if (!owner_name) {
        formIsValid = false;

        errors["owner_name"] = "*Please Enter  Owner Name";
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

          errors["owner_contact_number"] =
            "*Please Enter a Valid Contact Number";
        }
      }

      //unit_per_1km
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

        errors["status"] = "**Please Select Device Status";
      }

      setErrors(errors);

      return formIsValid;
    }
  };

  const submitFunc = (e) => {
    e.preventDefault();
    const driver_contact_no = driver_contact_number;
    const owner_contact_no = owner_contact_number;
    if (validate()) {
      const obj = {
        vehicle_number,
        type,
        unit_per_1km,
        driver_name,
        driver_contact_no,
        owner_name,
        owner_contact_no,
        serial_number,
        status,
      };

      console.log(obj);

      axios
        .put("http://localhost:8000/api/updatevehicledetails", obj)
        .then((res) => {
          alert("Vehicle Edited Successfully");
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const goBack = () => {
    props.history.push("/vehicles/edit-vehicle");
  };

  const vehicleDeleteFunc = (e) => {
    // const obj = {props.match.params.id}
    //const vehicleNumber = props.match.params.id;
    // console.log(vehicleNumber);

    axios
      .delete("http://localhost:8000/api/deletevehicledetails/" + vehicleId)
      .then((res) => {
        console.log(res.data);
        if (res.data.message == "successfully deleted") {
          alert("Successfully Removed Vehicle");

          // setVehicleNumber('');
          // setType('');
        } else {
          alert("operation fail");
        }
      })
      .then(() => {
        props.history.push("/vehicles/edit-vehicle");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <strong>Vehicle Details</strong>
          <h2>{props.match.params.id}</h2>
        </CardHeader>
        <CardBody>
          <Form
            action=""
            //method="post"
            encType="multipart/form-data"
            className="form-horizontal"
            //onSubmit={submitFunc}
          >
            <FormGroup row>
              {/*space for empty row  */}
              <Col md="3">
                <Label></Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static"></p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Type</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="type"
                  name="type"
                  placeholder="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  disabled
                />
                <FormText className="help-block">Enter driver name</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Driver Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
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
                  type="text"
                  id="device-serial-number"
                  name="device-serial-number"
                  placeholder="device-serial-number"
                  value={serial_number}
                  onChange={(e) => setSerial_number(e.target.value)}
                />
                <FormText color="muted">Please enter vehicle number</FormText>
                <div style={{ color: "red" }}>{errors.serial_number}</div>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Device Status</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
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
                <FormText color="muted">Please enter vehicle number</FormText>
                <div style={{ color: "green" }}>{errors.status}</div>
              </Col>
            </FormGroup>

            <div>
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
                onClick={vehicleDeleteFunc}
                size="sm"
                color="danger"
              >
                <i className="fa fa-ban" />
                Delete Vehicle
              </Button>
              <Button
                style={{ margin: "2px" }}
                onClick={goBack}
                size="sm"
                color="primary"
              >
                <i className="fa fa-dot-circle-o" /> Back
              </Button>
            </div>
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};

export default EditVehicleData;
