import React, { Component,useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";



class PreviousLocation extends Component{

  constructor(props) {
    super(props);
    this.backToLogin = this.backToLogin.bind(this);
    this.submitFunc = this.submitFunc.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);

    this.state = {
      date:"",
      time:"",
      vehicleNumber:"",
      vehicleList:[],
      user_id:'3',
      vehicles:[],
      isLoggedIn:true,
      userId:'',
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:8000/api/user/allvehiclenumbers')
    //   .then((res)=>{
    //     console.log(res.data);
    //     this.state.vehicleList(res.data.vehicles);
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })

    let user = localStorage.getItem("user_id");

    if(user==undefined){
      this.setState({
        isLoggedIn:false
      });
    }else {

      axios.get('http://localhost:8000/api/allvehiclenumbers/' + localStorage.getItem("user_id"))
        .then(res => {
          //handle response data
          console.log(res.data);
          this.setState({vehicles: res.data.vehicles})

        })
        .catch((err) => {
          //handle error
          console.log(err);
        })
    }
  }



  backToLogin () { this.props.history.push('/login'); }


  submitFunc(e){
    e.preventDefault();

    const obj = {
      vehicleNumber:this.state.vehicleNumber,
      date:this.state.date,
      time:this.state.time
    };

    console.log(obj);


  }

  onChangeVehicleNumber(e){
    this.setState({
      vehicleNumber:e.target.value
    })
  }

  onChangeDate(e){
    this.setState({
      date:e.target.value
    })
  }

  onChangeTime(e){
    this.setState({
      time:e.target.value
    })
  }






  render(){
    if(this.state.isLoggedIn===true){
      return (
        <div>
          <h1>This is previous location tab hello world</h1>
          <Row>
            <Col xs="12" lg="6">
              {/*<h1>USe this column for google map</h1>*/}
              <div>
                <Map
                  google={this.props.google} zoom={9}
                  initialCenter={{
                    lat:7.0146334,
                    lng:79.9676378,
                    accuracy:20
                  }}>
                  <Marker onClick={this.onMarkerClick}
                          name={'Current location'} />
                </Map>
              </div>
            </Col>
            <Col xs="12" lg="6">



              <Card>
                <CardHeader>
                  <strong>Enter Details</strong>
                  <small>For Previous Location</small>
                </CardHeader>
                <CardBody>
                  <Form
                  onSubmit={this.submitFunc}
                  >
                    <Row>
                      <Col xs="12">
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="12">



                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="select">Select Vehicle Number</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <Input type="select"
                                   name="select"
                                   id="select"
                                   onChange={(e) => this.setState({vehicle_number:e.target.value})}
                            >
                              <option value="0">Please select</option>
                              {this.state.vehicles.map((vehicle) => (
                                <option
                                  values={vehicle}
                                > {vehicle}</option>

                              ))}
                            </Input>
                          </Col>
                        </FormGroup>



                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <FormGroup>
                          <Label htmlFor="date">Date</Label>
                          <Input
                            type="date"
                            value={this.state.date}
                            onChange={this.onChangeDate}

                          />
                        </FormGroup>
                      </Col>
                      <Col xs="4">
                        <FormGroup>
                          <Label htmlFor="time">Time</Label>
                          <Input
                            type="time"
                             value={this.state.time}
                             onChange={this.onChangeTime}

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

  }else if(this.state.isLoggedIn===false){
      return(
        <div className="access_denied">
          <Card className="text-white bg-primary ">
            <CardBody>
              <div className="clearfix">
                {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
                <h4 className="pt-3">Please login First</h4>
                <p className="text-muted float-left">
                  You don't have permission to access requested page. Please login first
                </p>
                <p className="text-muted float-left">
                  Please login first
                </p>

                <Row>
                  <Col md="4"></Col>
                  <Col md="4">
                    <Button
                      block color="dark"
                      className="btn-pill"
                      onClick={this.backToLogin}
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
}

//export default PreviousLocation;
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(PreviousLocation)
