import React, {Component, useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

const PreviousLocation = () => {

  const [vehicleNumber,setVehicleNumber] = useState('');
  const [date,setDate] = useState('');
  const [time,setTime] = useState('');

  const submitFunc = (e) => {
    e.preventDefault();

    const obj = {vehicleNumber, date, time}
    console.log(obj);

    setTime('');
    setDate('');
    setVehicleNumber('');

  }



    return (
      <div>
        <h1>This is previous location tab hello world</h1>
        <Row>
          <Col xs="12" lg="6">
            <h1>USe this colom for google map</h1>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <strong>Enter Details</strong>
                <small> For Daily running report</small>
              </CardHeader>
              <CardBody>
                <Form onSubmit={submitFunc}>
                  <Row>
                    <Col xs="12">

                    </Col>
                  </Row>
                  <Row>
                    <Col xs="12">
                      <FormGroup>
                        <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                        <Input
                          type="text"
                          name="ccc"
                          placeholder="NM-2345"
                          required
                          onChange={(e)=>setVehicleNumber(e.target.value)}
                          value={vehicleNumber}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          type="date"
                          onChange={(e)=>setDate(e.target.value)}
                          value={date}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          type="time"
                          onChange={(e)=>setTime(e.target.value)}
                          value={time}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">

                    </Col>
                  </Row>
                  <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Button block color="primary" className="btn-pill" type="submit">Get Location</Button>
                  </Col>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );

}

export default PreviousLocation;
