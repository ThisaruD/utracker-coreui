import React, { useState} from 'react';
import {Badge, Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Pagination,
  PaginationItem, PaginationLink, Row, Table} from "reactstrap";


  const DailyReport = () =>{

    const [vehicleNumber, setVehicleNumber] = useState('');
    const [date,setDate] = useState('');

    const submitFunc = (e) =>{
      e.preventDefault();
const obj ={vehicleNumber, date}
console.log(obj);

setVehicleNumber('');
setDate('');
    }



    return (
      <div>
        <Row>
          <Col xs="12" lg="6">

            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daily Running Report
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>Vehicle Number</th>
                    <th>Total Distance</th>
                    <th>Payment(RS)</th>
                    <td>Status</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>GS-8666</td>
                    <td>28 Km</td>
                    <td>-</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
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
                        <Label htmlFor="vehicle-number">Vehicle Number</Label>
                        <Input type="text"
                               id="vehicle-number"
                               name="vehicle-number"
                               placeholder="NM-2345"
                               required
                               value={vehicleNumber}
                               onChange={(e) => {setVehicleNumber(e.target.value)}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="date">Date</Label>
                        <Input type="date"
                               name="date"
                               id="date"
                               value={date}
                               onChange={(e) =>{setDate(e.target.value)}}
                        >

                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">

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

}

export default DailyReport;


