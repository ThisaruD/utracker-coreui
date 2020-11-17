import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class PreviousPaths extends Component {

constructor(props) {
  super(props);


  this.state = {
    vehicleNumber:"",
    date1:"",
    time1:"",
    date2:"",
    time2:"",
  }
}

onChangeVehicleNumber(e){
 this.setState({
   vehicleNumber:e.target.value,
 });
}







  render() {
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
                <Form>
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
                        <Label htmlFor="ccmonth">Date</Label>
                        <Input
                          type="date"
                          name="ccmonth"
                          id="ccmonth"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Time</Label>
                        <Input
                          type="time"
                          name="ccmonth"
                          id="ccmonth"
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
                          name="ccmonth"
                          id="ccmonth"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Time</Label>
                        <Input
                          type="time"
                          name="ccmonth"
                          id="ccmonth"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">
                    </Col>
                  </Row>
                  <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Button block color="primary" className="btn-pill">Get Path</Button>
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

export default PreviousPaths;
