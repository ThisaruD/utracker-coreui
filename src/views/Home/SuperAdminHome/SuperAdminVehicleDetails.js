import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import Loader from "../../Required Sample Pages/Loader";


const SuperAdminVehicleDetails = (props) => {


  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(false);


  useEffect(() => {

    axios.get('http://localhost:8000/api/getallvehiclesdetails')
      .then((res) => {
        console.log(res.data);
        setVehicles(res.data.vehicles);
        setLoading(false);
        setDataLoad(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [dataLoad, loading]);


  const headerStyle = {
    backgroundColor:  ' #4d94ff',

  };

  return (
    <div>
      <h1 style={headerStyle}>All Vehicles information</h1>
      {loading && <Loader/>}
      {dataLoad &&
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
            {vehicles.map((vehicle) => (
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
              <Button block color="primary" className="btn-pill"
                      onClick={() => props.history.push('/super-admin-home')}>Back</Button>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>


        </CardBody>
      </Card>
      }

    </div>
  );
}

export default SuperAdminVehicleDetails;
