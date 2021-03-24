import React, {useEffect,useState} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import axios from 'axios';
import {Link,NavLink} from "react-router-dom";
//import {renderRoutes} from "react-router-config";


  export default function EditVehicle (props) {

    const [id,setId] = useState("100");

      const [vehicles,setVehicles] = useState([]);

    const [vehicleNumber1,setVehicleNumber1] = useState('');
    //const [id,setId] = useState('2');

    const clickHandler=()=>{

       // props.history.replace({
       //   pathname:'/vehicles/details',
       //   // search:"?vehicleNumber=RT235"
       //   state:{vehicleNumber:vehicleNumber}
       // });


      props.history.push('/vehicles/details/'+vehicleNumber1);
      console.log(vehicleNumber1);
    }

    //https://run.mocky.io/v3/e951b11f-def4-49ab-92d8-d3cf9dc8fbed
    //
    useEffect(()=>{
      axios.get('http://localhost:8000/api/user/allvehiclenumbers')
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
          <Input type="select"
                 name="select"
                 id="select"
                 onChange={(e)=>setVehicleNumber1(e.target.value)}
          >
            <option value="0">Please select</option>
            {vehicles.map((vehicle)=>(
              <option
                value={vehicle}

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


