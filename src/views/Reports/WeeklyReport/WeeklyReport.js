import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label,
        Pagination, PaginationItem, PaginationLink, Row, Table} from "reactstrap";


  const WeeklyReport = (props) =>{

    const [vehicleNumber, setVehicleNumber] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');

    const [isLoggedIn,setIsLoggedIn] = useState(true);
    const [userId,setUserId] = useState(null);


    useEffect(()=>{
      const user = localStorage.getItem("user_id");
      setUserId(user);


      if(user==undefined) {
        console.log('hi');
        setIsLoggedIn(false);
      }

    });

    const backToLogin = () =>{props.history.push('/login');}


    const submitFunc = (e) =>{
      e.preventDefault();
      const obj = {vehicleNumber, fromDate, toDate}
      console.log(obj);

setVehicleNumber('');
setToDate('');
setFromDate('');
    }


    if(isLoggedIn===true){
      return (
        <div>

          <Row>
            <Col xs="12" lg="6">

              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Weekly Running Report
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th>Vehicle Number</th>
                      <th>Date registered</th>
                      <th>Total Distance</th>
                      <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>GS 8666</td>
                      <td>2012/01/01</td>
                      <td>26 Km</td>
                      <td>
                        <Badge color="success">Active</Badge>
                      </td>
                    </tr>



                    </tbody>
                  </Table>
                  <Pagination>
                    <PaginationItem>
                      <PaginationLink previous tag="button"></PaginationLink>
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink tag="button">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next tag="button"></PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" lg="6">

              <Card>
                <CardHeader>
                  <strong>Enter Details</strong>
                  <small> For Monthly running report</small>
                </CardHeader>
                <CardBody>

                  <Form onSubmit={submitFunc}>
                    <Row>
                      <Col xs="12">
                        {/*<FormGroup>*/}
                        {/*  <Label htmlFor="name">Name</Label>*/}
                        {/*  <Input type="text" id="name" placeholder="Enter your name" required />*/}
                        {/*</FormGroup>*/}
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">
                        <FormGroup>
                          <Label htmlFor="ccnumber">Vehicle Number</Label>
                          <Input type="text"
                                 id="vehicle-number"
                                 name="vehicle-number"
                                 placeholder="NM-2345"
                                 required
                                 value={vehicleNumber}
                                 onChange={(e) =>{setVehicleNumber(e.target.value)}}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="ccmonth">From :</Label>
                          <Input type="date"
                                 name="from"
                                 id="from"
                                 value={fromDate}
                                 onChange={(e) => {setFromDate(e.target.value)}}
                          >

                          </Input>
                        </FormGroup>
                      </Col>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="ccmonth">To :</Label>
                          <Input type="date"
                                 name="to"
                                 id="to"
                                 value={toDate}
                                 onChange={(e) => {setToDate(e.target.value)}}
                          >

                          </Input>
                        </FormGroup>
                      </Col>
                      <Col xs="4">

                      </Col>
                    </Row>

                    {/*<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">*/}
                    <Button block color="primary" className="btn-pill" type="submit">Get Report</Button>
                    {/*</Col>*/}

                  </Form>

                </CardBody>
              </Card>



            </Col>

          </Row>



        </div>
      );

    }else if(isLoggedIn==false){
      return (
        <div className="access_denied">
          <Card className="text-white bg-primary ">
            <CardBody>
              <div className="clearfix">
                {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
                <h4 className="pt-3">Please login First</h4>
                <p className="text-muted float-left">
                  You don't have permission to access requested page. Please login first
                </p>
                <Row>
                  <Col md="4"></Col>
                  <Col md="4">
                    <Button
                      block color="dark"
                      className="btn-pill"
                      onClick={backToLogin}
                    >Login</Button>

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

export default WeeklyReport;

