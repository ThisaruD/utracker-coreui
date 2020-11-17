import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

class PreviousLocation extends Component {

  constructor(props) {
    super(props);
    this.onChangeVehicleNumber = this.onChangeVehicleNumber.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.submitFunc = this.submitFunc.bind(this);


    this.state = {
      vehicleNumber:"",
      date:"",
      time:""
    }
  }

  onChangeVehicleNumber(e){
    this.setState({
      vehicleNumber:e.target.value
    });
  }

  onChangeDate(e){
    this.setState({
      date:e.target.value
    });
  }

  onChangeTime(e){
    this.setState({
      time:e.target.value
    });
  }


  submitFunc(e){
    e.preventDefault();

    const obj = {
      vehicleNumber: this.state.vehicleNumber,
      date: this.state.date,
      time:this.state.time
    }
    console.log(obj);

   // this.setState({
   //   vehicleNumber:"",
   //   date:"",
   //   time:""
   // });

  }


  render() {
    return (
      <div>
        <h1>This is previous location tab</h1>
        <Row>
          <Col xs="12" lg="6">

          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <strong>Enter Details</strong>
                <small> For Daily running report</small>
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.submitFunc}>
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
                          onChange={this.onChangeVehicleNumber}
                          value={this.state.vehicleNumber}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="6">
                      <FormGroup>
                        <Label htmlFor="ccmonth">Date</Label>
                        <Input
                          type="date"
                          name="ccmonth"
                          id="ccmonth"
                          onChange={this.onChangeDate}
                          value={this.state.date}
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
                          onChange={this.onChangeTime}
                          value={this.state.time}
                        />
                      </FormGroup>
                    </Col>
                    <Col xs="4">

                    </Col>
                  </Row>


                  <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <Button block color="primary" className="btn-pill">Get Location</Button>
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

export default PreviousLocation;
