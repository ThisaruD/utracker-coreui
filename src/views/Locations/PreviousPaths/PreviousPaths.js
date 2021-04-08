import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import axios from "axios";


class PreviousPaths extends Component{


  constructor(props) {
    super(props);
    this.submitFunc = this.submitFunc.bind(this);
    this.backToLogin = this.backToLogin.bind(this);

    this.state = {
      vehicleNumber:'',
      from_date:'',
      from_time:'',
      to_date:'',
      to_time:'',
      user_id:'3',
      vehicles:[],
      isLoggedIn:true,
      userId:''
    }
  }


  componentDidMount() {

    let user = localStorage.getItem("user_id");

    if(user==undefined){
      this.setState({
        isLoggedIn:false
      });
    }else {


      axios.get('http://localhost:8000/api/allvehiclenumbers/' +  localStorage.getItem("user_id"))
        .then(res => {
          //handle response data
          console.log(res);
          //setVehicles(res.data.vehicles);
          this.setState({vehicles: res.data.vehicles})

        })
        .catch((err) => {
          //handle error
          console.log(err);
        })
    }
  }

//replace(/-/g,"/")
  backToLogin ()  {
    this.props.history.push('/login');
  }


  submitFunc (e){
    e.preventDefault();

    const obj = {
    vehicle_number: this.state.vehicle_number,
    from_date:  this.state.from_date,
      from_time:this.state.from_time,
      to_date: this.state.to_date,
      to_time:this.state.to_time
    }

console.log(obj);
    axios.get('http://localhost:8000/api/getvehiclepath',obj)
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
console.log(err);
      })

    this.setState({
      vehicle_number:'',
      from_date:'',
      from_time:'',
      to_date:'',
      to_time:''
    })



  }




  // const submitFunc = (e) =>{
  //   e.preventDefault();
  //   const obj ={vehicleNumber, date1, time1, date2, time2}
  //   console.log(obj);
  //
  // setVehicleNumber('');
  // setDate1('');
  // setTime1('');
  // setDate2('');
  // setTime2('');
  //
  // }


render() {


  if(this.state.isLoggedIn==true){
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
                                values={this.state.vehicle}
                              > {vehicle}</option>

                            ))}
                          </Input>
                        </Col>
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
                          format="YYYY/MM/DD"
                          name="date1"
                          id="date1"
                          value={this.state.from_date}

                          onChange={(e) => {
                            this.setState({from_date:e.target.value})
                          }}
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
                          value={this.state.from_time}
                          onChange={(e) => {
                            this.setState({from_time:e.target.value})
                          }}
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
                          value={this.state.to_date}
                          onChange={(e) => {
                            this.setState({to_date:e.target.value})
                          }}
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
                          value={this.state.to_time}
                          onChange={(e) => {
                            this.setState({to_time:e.target.value})
                          }}
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
  }else if(this.state.isLoggedIn==false){
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

export default PreviousPaths;
