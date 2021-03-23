import React, { useState } from "react";
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
} from "reactstrap";

import axios from 'axios';

const AddVehicle = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [type, setType] = useState("");
  const [brandName, setBrandName] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverContactNumber, setDriverContactNumber] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerContactNumber, setOwnerContactNumber] = useState("");
  const [date, setDate] = useState("");
  const [unitPerKm, setUnitPerKm] = useState("");

  const submitFunc = (e) => {
    e.preventDefault();
    const vehicleDetails = {
      vehicleNumber,
      type,
      brandName,
      driverName,
      driverContactNumber,
      ownerName,
      ownerContactNumber,
      date,
      unitPerKm,
    };
    console.log(vehicleDetails);

   axios.post('add url',vehicleDetails)
     .then(res=>{
       //handling success part
       console.log(res.data);
     })
     .catch(err=>{
       //handling error part
       console.log(err);
     })

  };


  const user = JSON.parse(localStorage.getItem('user'));


  if(user.role_id==1 |user.role_id==2){
    return (

      <div>
        <Card>
          <CardHeader>
            <strong>Add vehicles</strong>
          </CardHeader>
          <CardBody>
            <Form
              action=""
              method="post"
              encType="multipart/form-data"
              className="form-horizontal"
              onSubmit={submitFunc}
            >
              <FormGroup row>
                {/*space for empty row  */}
                <Col md="3">
                  <Label></Label>
                </Col>
                <Col xs="12" md="9">
                  <p className="form-control-static">-</p>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Vehicle Number</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="text"
                    id="vehicle-number"
                    name="vehicle-number"
                    placeholder="Vehicle Number"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                  />
                  <FormText color="muted">Please enter vehicle number</FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Type</Label>
                  <Input
                    type="select"
                    name="type"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="0">Please select type</option>
                    <option value="1">Van</option>
                    <option value="2">Car</option>
                    <option value="3">Bus</option>
                    <option value="3">Truck</option>
                  </Input>
                </Col>
                <Col md="6">
                  <Label>Brand Name</Label>
                  <Input
                    type="text"
                    id="brand-name"
                    name="brand-Name"
                    placeholder="Vehicle brand name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                  />
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
                    value={driverName}
                    onChange={(e) => setDriverName(e.target.value)}
                  />
                  <FormText className="help-block">Enter driver name</FormText>
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
                    value={driverContactNumber}
                    onChange={(e) => setDriverContactNumber(e.target.value)}
                  />
                  <FormText className="help-block">
                    Enter driver contact number
                  </FormText>
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
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                  <FormText className="help-block">Enter owner name</FormText>
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
                    value={ownerContactNumber}
                    onChange={(e) => setOwnerContactNumber(e.target.value)}
                  />
                  <FormText className="help-block">
                    Enter owner contact number
                  </FormText>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label>
                    Date Input <Badge>NEW</Badge>
                  </Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="date"
                    id="date-added"
                    name="date-added"
                    placeholder="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
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
                    value={unitPerKm}
                    onChange={(e) => setUnitPerKm(e.target.value)}
                  >
                    <option value="0">Please select</option>
                    <option value="1">Rs:100</option>
                    <option value="2">Rs:200</option>
                    <option value="3">Rs:300</option>
                  </Input>
                </Col>
              </FormGroup>

              <Button type="submit" size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Submit
              </Button>
              <Button type="reset" size="sm" color="danger">
                <i className="fa fa-ban" /> Reset
              </Button>
            </Form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>
    );
  }else{
    return(
      <div>
        <h1>you havent access</h1>
      </div>
    );
  }




};

export default AddVehicle;
