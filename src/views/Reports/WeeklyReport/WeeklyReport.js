import React, {Component} from 'react';
import {
  Badge, Button,
  Card,
  CardBody,
  CardHeader,
  Col, Form, FormGroup, Input, Label,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table
} from "reactstrap";

class WeeklyReport extends Component {
  render() {
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
                <Form>
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
                        <Input type="text" id="ccnumber" placeholder="NM-2345" required />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="ccmonth">From :</Label>
                        <Input type="date" name="ccmonth" id="ccmonth">

                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="ccmonth">To :</Label>
                        <Input type="date" name="ccmonth" id="ccmonth">

                        </Input>
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      {/*<FormGroup>*/}
                      {/*  <Label htmlFor="cvv">CVV/CVC</Label>*/}
                      {/*  <Input type="text" id="cvv" placeholder="123" required />*/}
                      {/*</FormGroup>*/}
                    </Col>
                  </Row>


                  <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Button block color="primary" className="btn-pill">Get Report</Button>
                  </Col>

                </Form>
              </CardBody>
            </Card>



          </Col>

        </Row>



      </div>
    );
  }
}

export default WeeklyReport;
