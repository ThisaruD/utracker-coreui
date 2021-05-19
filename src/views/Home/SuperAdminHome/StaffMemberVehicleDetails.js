import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
} from "reactstrap";
import Loader from "../../Required Sample Pages/Loader";

const TransportManagerVehicleDetails = (props) => {

  const [vehicles, setVehicles] = useState([]);
  const [vehicleId, setVehicleID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(false);



  useEffect(() => {

    axios.get("http://localhost:8000/api/tmvehicledetails/"+localStorage.getItem('companies_company_id'))
      .then((res) => {
        console.log(res.data);
        setVehicles(res.data.vehicle_details);

        res.data['vehicle_details'].map(value=>{

          let details = {
            vehicle_num:value.vehicle_number,
            vehicle_id:value.vehicle_id
          };
          vehicleId.push(details);
        });

        setLoading(false);
        setDataLoad(true);

      })
      .catch((err) => {
        console.log(err);
      });
  }, [dataLoad,loading]);


  // const vehicleDeleteFunc = (id) =>{
  //   axios.delete("http://localhost:8000/api/deletevehicledetails/" + id)
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data.message == "successfully deleted") {
  //         alert("successfully removed vehicle");
  //
  //         // setVehicleNumber('');
  //         // setType('');
  //       } else {
  //         alert("operation fail");
  //       }
  //     })
  //     .then(() => {
  //       window.location.reload();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err);
  //     });
  // }

  const headerStyle = {
    backgroundColor:  ' #4d94ff',

  };



  return (
    <div>
      <h1 style={headerStyle}>Your Companies Current Vehicle Information</h1>
      {loading && <Loader/>}
      { dataLoad &&
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
              {/*<th>Delete</th>*/}
            </tr>
            </thead>
            <tbody>
            {vehicles.map((vehicle) => (
              <tr>
                <td>{vehicle.vehicle_number}</td>
                <td>{vehicle.type}</td>
                <td>{vehicle.unit_per_1km}</td>
                <td>{vehicle.created_at}</td>
                {/*<td>*/}
                {/*  <button*/}
                {/*    style={{*/}
                {/*      backgroundColor: `#c7081e`,*/}
                {/*      color: "white",*/}
                {/*      borderRadius: "5px",*/}
                {/*      borderColor: "white",*/}
                {/*    }}*/}
                {/*    size="sm"*/}
                {/*    onClick={()=>vehicleDeleteFunc(vehicle.vehicle_id)}*/}
                {/*  >*/}
                {/*    Delete*/}
                {/*  </button>*/}
                {/*</td>*/}
              </tr>

            ))}
            </tbody>
          </Table>
          <Row>
            <Col md="4">
              <Button
                block
                color="primary"
                className="btn-pill"
                onClick={() => props.history.push('/super-admin-home')}
              >
                Back
              </Button>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>
        </CardBody>
      </Card>
      }


    </div>
  );
};

export default TransportManagerVehicleDetails;
