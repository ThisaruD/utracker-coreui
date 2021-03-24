import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, Input, Label} from "reactstrap";



const ViewVehicleData = (props) =>{


  const [vehicleNumber,setVehicleNumber] = useState('');
  const [type,setType] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/getvehicledetails',{params:{vehicle_number:props.match.params.id}})
      .then((res)=>{
        setType(res.data.type);
        setVehicleNumber(res.data.vehicle_num);
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);



  return(
    <div>
<h1>This is view vehicle data</h1>
      <Card>
        <CardHeader>
          <strong>Vehicle Details</strong>
        </CardHeader>
        <CardBody>
          <Form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
            // onSubmit={submitFunc}
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
                  disabled
                  // onChange={(e) => setVehicleNumber(e.target.value)}
                />
                {/*<FormText color="muted">Please enter vehicle number</FormText>*/}
              </Col>
            </FormGroup>


            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Vehicle Type</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="vehicle-number"
                  name="vehicle-number"
                  placeholder="Vehicle Number"
                  value={type}
                  disabled
                  // onChange={(e) => setType(e.target.value)}
                />
                {/*<FormText color="muted">Please enter vehicle number</FormText>*/}
              </Col>
            </FormGroup>




            <Button type="Back" size="sm" color="primary">
              <i className="fa fa-dot-circle-o" /> Submit
            </Button>
            {/*<Button type="reset" size="sm" color="danger">*/}
            {/*  <i className="fa fa-ban" /> Reset*/}
            {/*</Button>*/}
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>




    </div>
  );
}

export default ViewVehicleData;
