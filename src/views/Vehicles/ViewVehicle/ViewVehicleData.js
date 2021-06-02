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
import BackToLogin from "../../Required Sample Pages/BackToLogin";

const ViewVehicleData = (props) => {
  const [vehicle_number, setVehicle_number] = useState("");
  const [type, setType] = useState("");
  const [unit_per_1km, setUnit_per_1km] = useState("");
  const [driver_name, setDriver_name] = useState("");
  const [driver_contact_number, setDriver_contact_number] = useState("");
  const [owner_name, setOwner_name] = useState("");
  const [owner_contact_number, setOwner_contact_number] = useState("");
  const [serial_number, setSerial_number] = useState("");
  const [status, setStatus] = useState("");

  const [date, setDate] = useState("");

  const [userId, setUserId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      setIsLoggedIn(false);
    } else {
      //vehicle numbers pass
      axios
        .get("http://localhost:8000/api/getvehicledetails", {
          params: { vehicle_number: props.match.params.id },
        })
        .then((res) => {
          // setVehicle_number();
          setVehicle_number(res.data.vehicle_num);
          setType(res.data.type1);
          setUnit_per_1km(res.data.unit_per_1km);
          setDriver_name(res.data.driver_name);
          setDriver_contact_number(res.data.driver_contact_no);
          setOwner_name(res.data.owner_name);
          setOwner_contact_number(res.data.owner_contact_no);
          setSerial_number(res.data.serial_number);
          setStatus(res.data.status1);
          setDate(res.data.date);

          console.log(res.data);
          console.log(res.data.owner_name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const goBack = () => {
    props.history.push("/vehicles/view-vehicle");
  };

  if (isLoggedIn === true) {
    return (
      <div>
        <Card>
          <CardHeader>
            <strong style={{ fontSize: "16px" }}>Vehicle Details</strong>

            <h2>{props.match.params.id}</h2>
          </CardHeader>
          <CardBody>
            <Form
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={goBack}
            >
              <br />
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Type</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="type"
                    name="type"
                    placeholder="type"
                    value={type}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label>Driver Name</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="driver-name"
                    name="driver-name"
                    placeholder="Driver Name"
                    value={driver_name}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label>Driver Contact Number</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="driver-contact-number"
                    name="driver-contact-number"
                    placeholder="Driver Contact Number"
                    // autoComplete="text"
                    value={driver_contact_number}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label>Owner Name</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="owner-name"
                    name="owner-name"
                    placeholder="Owner Name"
                    value={owner_name}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label>Owner Contact Number</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="owner-contact-number"
                    name="owner-contact-number"
                    placeholder="Owner Contact Number"
                    value={owner_contact_number}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label>Added at</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="date-added"
                    name="date-added"
                    placeholder="date"
                    value={date}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              {/* <FormGroup row>
                <Col md="3">
                  <Label>Unit per Km (Rs:)</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    name="unit-per-km"
                    id="unit-per-km"
                    value={unit_per_1km}
                    disabled
                  ></Input>
                </Col>
              </FormGroup>

              <br /> */}

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Device Serial Number</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="device-serial-number"
                    name="device-serial-number"
                    placeholder="device-serial-number"
                    value={serial_number}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Device Status</Label>
                </Col>
                <Col xs="12" md="5">
                  <Input
                    className="inputStyle"
                    type="text"
                    id="device-status"
                    name="device-status"
                    placeholder="device-status"
                    value={status}
                    disabled
                  />
                </Col>
              </FormGroup>

              <br />

              <Button onClick={goBack} size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Back
              </Button>

              {/* <Button onClick={vehicleDeleteFunc} size="sm" color="danger">
              <i className="fa fa-ban" />
              Delete Vehicle
            </Button> */}
            </Form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <BackToLogin />
      </div>
    );
  }
};

export default ViewVehicleData;
