import React, { useState } from "react";
import {CardHeader, Card, CardBody, Form, FormGroup, Col, Label, Input, FormText, CardFooter, Button, Badge} from "reactstrap";

import axios from 'axios';

const AddVehicle = (props) => {

  const [vehicle_number, setVehicle_number] = useState("");
  const [type, setType] = useState("");
  const [driver_name, setDriver_name] = useState("");
  const [driver_contact_number, setDriver_contact_number] = useState("");
  const [owner_name, setOwner_name] = useState("");
  const [owner_contact_number, setOwner_contact_number] = useState("");
  const [date, setDate] = useState("");
  const [unit_per_1km, setUnit_per_1km] = useState('');
  const [serial_number,setSerial_number] = useState('');
  const [status,setStatus] = useState('');

//========================should get this data from local storage====================
  const [user_id,setUser_id] = useState('2');
  const [companies_company_id,setCompanies_company_id] = useState('2');

 // const user = JSON.parse(localStorage.getItem('user'));
//console.log(user.role_id);


  const submitFunc = (e) => {
    e.preventDefault();
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
      companies_company_id
    };
    console.log(vehicleDetails);

   axios.post('http://localhost:8000/api/savevehicledetails/'+user_id,vehicleDetails,{
     headers:{
       "content-type":"application/json",
        Authorization:"Bearer" + localStorage.getItem('token'),
     },
    })
     .then(res=>{
       //handling success part
       console.log(res.data);
       alert("vehicle added successfully");
       setVehicle_number('');
       setType('');
       setOwner_name('');
       setDriver_name('');
       setOwner_contact_number('');
       setDriver_contact_number('');
       setUnit_per_1km('');
       setSerial_number('');
       setStatus('')
     })
     .catch(err=>{
       //handling error part
       console.log(err);
     })
    // fetch('http://localhost:8000/user/savevehicledetails/'+user_id,{
    //   method:'POST',
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify(vehicleDetails)
    // }).then((res)=>{
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // })
  }


  const resetFunc = (e) =>{
    setVehicle_number('');
    setType('');
    setDriver_name('');
    setDriver_contact_number('');
    setDate('');
    setUnit_per_1km('');
    setSerial_number('');
    setStatus('');
  }







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
                    required
                    type="text"
                    id="vehicle-number"
                    name="vehicle-number"
                    placeholder="Vehicle Number"
                    value={vehicle_number}
                    onChange={(e) => setVehicle_number(e.target.value)}
                  />
                  <FormText color="muted">Please enter vehicle number</FormText>
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
                    <option value="van">Van</option>
                    <option value="car">Car</option>
                    <option value="bus">Bus</option>
                    <option value="truck">Truck</option>
                  </Input>
                </Col>
                <Col md="6">
                  {/*<Label>Brand Name</Label>*/}
                  {/*<Input*/}
                  {/*  type="text"*/}
                  {/*  id="brand-name"*/}
                  {/*  name="brand-Name"*/}
                  {/*  placeholder="Vehicle brand name"*/}
                  {/*  value={brandName}*/}
                  {/*  onChange={(e) => setBrandName(e.target.value)}*/}
                  {/*/>*/}
                </Col>
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
                    required
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
                    required
                    type="select"
                    name="unit-per-km"
                    id="unit-per-km"
                    value={unit_per_1km}
                    onChange={(e) => setUnit_per_1km(e.target.value)}
                  >
                    <option value="0">Please select</option>
                    <option value="1">Rs:100</option>
                    <option value="2">Rs:200</option>
                    <option value="3">Rs:300</option>
                  </Input>
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
                  <FormText color="muted">Please enter vehicle number</FormText>
                </Col>
              </FormGroup>


              <FormGroup row>
                <Col md="6">
                  <Label htmlFor="text-input">Device Status</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    required
                    type="text"
                    id="device-status"
                    name="device-status"
                    placeholder="device-status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <FormText color="muted">Please enter vehicle number</FormText>
                </Col>
              </FormGroup>


              <Button type="submit" size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Submit
              </Button>
              <Button
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





};

export default AddVehicle;
