import React, { useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

const PreviousPaths = ()=>  {



  const [vehicleNumber,setVehicleNumber] = useState('');
  const [date1,setDate1] = useState('');
  const [time1,setTime1] = useState('');
  const [date2,setDate2] = useState('');
  const [time2,setTime2] = useState('');


  const submitFunc = (e) =>{
    e.preventDefault();
    const obj ={vehicleNumber, date1, time1, date2, time2}
    console.log(obj);

  setVehicleNumber('');
  setDate1('');
  setTime1('');
  setDate2('');
  setTime2('');

  }





    return (
      <div>
        <h1>This is previous paths tab</h1>
        <Row>
          <Col xs="12" lg="6">

          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <strong>Enter Details</strong>
                <small> For vehicles previous path </small>
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
                        <Label htmlFor="ccnumber">Vehicle Number</Label>
                        <Input
                          type="text"
                          id="ccnumber"
                          placeholder="NM-2345"
                          required
                          value={vehicleNumber}
                          onChange={(e)=>{setVehicleNumber(e.target.value)}}
                        />
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
                          name="date1"
                          id="date1"
                          value={date1}
                          onChange={(e)=>{setDate1(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="time1">Time</Label>
                        <Input
                          type="time"
                          name="time1"
                          id="time1"
                          value={time1}
                          onChange={(e)=>{setTime1(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                    </Col>
                  </Row>
                  <Row>
                    <p>To</p>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Date</Label>
                        <Input
                          type="date"
                          name="date2"
                          id="date2"
                          value={date2}
                          onChange={(e)=>{setDate2(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="time2">Time</Label>
                        <Input
                          type="time"
                          name="time2"
                          id="time2"
                          value={time2}
                          onChange={(e)=>{setTime2(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                    </Col>
                  </Row>
                  <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Button block color="primary" className="btn-pill" type="submit">Get Path</Button>
                  </Col>
                </Form>
              </CardBody>
            </Card>

          </Col>
        </Row>


      </div>
    );

}

export default PreviousPaths;
