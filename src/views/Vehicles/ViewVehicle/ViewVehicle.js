import React, {useEffect, useState} from 'react';
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import axios from "axios";


  const ViewVehicle = (props) =>{


    const [vehicles,setVehicles] = useState([]);

    const [vehicleNumber,setVehicleNumber] = useState('');


    const clickHandler =() =>{
      props.history.push('/vehicles/details2/'+vehicleNumber);
      console.log(vehicleNumber);
    }



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


    return (
      // <div>
      //   <h1>This is view device tab</h1>
      // </div>
      <div>
        <h1>This is View vehicle tab</h1>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="select">Select Vehicle Number</Label>
          </Col>
          <Col xs="12" md="9">
            <Input type="select"
                   name="select"
                   id="select"
                   onChange={(e)=>setVehicleNumber(e.target.value)}
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

}

export default ViewVehicle;
