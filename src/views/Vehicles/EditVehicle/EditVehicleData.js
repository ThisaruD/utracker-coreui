import React,{useState,useEffect} from 'react';
import {Badge, Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import axios from "axios";


const EditVehicleData = (props) =>{


  // const [first,setFirst] = useState(null);
  // const [vehicle,setVehicle] = useState({});
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


  const submitFunc = (e) =>{

    axios.post('add url')
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
    console.log(err);
  })



  }




  return (
    // <div>
    //   <h1>Hello dilshan</h1>
    //   <h1>{props.match.params.id}</h1>
    //  <h1>{vehicle.vehicle_num}</h1>
    //   <h1>{vehicle.type}</h1>


      <div>
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
              onSubmit={submitFunc}
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
                    onChange={(e) => setVehicleNumber(e.target.value)}
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
                    onChange={(e) => setType(e.target.value)}
                  />
                  {/*<FormText color="muted">Please enter vehicle number</FormText>*/}
                </Col>
              </FormGroup>




              <Button type="submit" size="sm" color="primary">
                <i className="fa fa-dot-circle-o" /> Submit
              </Button>
              <Button type="reset" size="sm" color="danger">
                <i className="fa fa-ban" /> Reset
              </Button>
            </Form>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </div>



  );







}

export default EditVehicleData;
