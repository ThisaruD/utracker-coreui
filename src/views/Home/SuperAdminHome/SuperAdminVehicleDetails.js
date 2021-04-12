import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";


const SuperAdminVehicleDetails = (props) =>{


  const[vehicles,setVehicles] = useState([]);



  useEffect(()=>{

    axios.get('http://localhost:8000/api/getallvehiclesdetails')
      .then((res)=>{
        console.log(res.data);
        setVehicles(res.data.vehicles);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);



  return(
    <div>
      <h1>This is vehicle details  page</h1>

      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i>Vehicles List
        </CardHeader>
        <CardBody>
          <Table responsive bordered>
            <thead>
            <tr>
              <th>Vehicle Number</th>
              <th>Type</th>
              <th>Unit Per Km</th>
              <th>Added At</th>
            </tr>
            </thead>
            <tbody>
            {vehicles.map((vehicle)=>(
              <tr>
                <td>{vehicle.vehicle_number}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.unit_per_1km}</td>
                <td>{vehicle.created_at}</td>
              </tr>
            ))}
            </tbody>
          </Table>
          <Row>
            <Col md="4">
              <Button block color="primary" className="btn-pill" onClick={()=>props.history.push('/super-admin-home')}>Back</Button>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>



        </CardBody>
      </Card>


    </div>
  );
}

export default SuperAdminVehicleDetails;
