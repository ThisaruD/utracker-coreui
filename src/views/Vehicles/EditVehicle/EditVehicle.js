import React, {useEffect,useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import axios from 'axios';


  export default function EditVehicle (props) {

    const [id,setId] = useState("1");

      const [vehicles,setVehicles] = useState([]);
      // const[vehicle_num,setVehicle_num] = useState(null);

    const clickHandler=()=>{
      // props.history.replace('/company/details');
      props.history.replace('/vehicles/details');
    }

    useEffect(()=>{
      axios.get('https://run.mocky.io/v3/e951b11f-def4-49ab-92d8-d3cf9dc8fbed')
        .then(res=>{
          //handle response data
          console.log(res);
          setVehicles(res.data.vehicles);

        })
   .catch((err)=>{
    //handle error
    console.log(err);
  })
    },[]);


    const user = JSON.parse(localStorage.getItem('user'));


if(user.role_id==1 |user.role_id==2){
  return (
    <div>
      <h1>This is edit vehicle tab</h1>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="select">Select Vehicle Number</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="select" name="select" id="select">
            <option value="0">Please select</option>
            {vehicles.map((vehicle)=>(
              <option
                values={vehicle}
              > {vehicle}</option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Button
            block color="primary"
            className="btn-pill"
            onClick={clickHandler}
          >Edit Vehicle Data</Button>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
}else{
  return(
    <div>
      <h1>you haven't access</h1>
    </div>
  );
}






}


