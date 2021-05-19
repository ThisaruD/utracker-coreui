import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";
import BackToLogin from "../../Required Sample Pages/BackToLogin";

export default function EditVehicle(props) {
  const [id, setId] = useState("100");
  const [vehicles, setVehicles] = useState([]);
  const [vehicleNumber1, setVehicleNumber1] = useState("");
  //const [id,setId] = useState('2');
  const [user_id, setUser_id] = useState("2");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);

  const clickHandler = () => {
    props.history.push("/vehicles/details/" + vehicleNumber1);
    console.log(vehicleNumber1);
  };

  //https://run.mocky.io/v3/e951b11f-def4-49ab-92d8-d3cf9dc8fbed

  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      console.log("hi");
      setIsLoggedIn(false);
    } else {
      axios
        .get(
          "http://localhost:8000/api/allvehiclenumbers/" +
          localStorage.getItem("user_id"),
          {
            headers: {
              "Content-type": "application/json",
              Authorization: "Bearer" + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          //handle response data
          console.log(res);
          setVehicles(res.data.vehicles);
        })
        .catch((err) => {
          //handle error
          console.log(err);
        });

      // fetch('http://localhost:8000/api/allvehiclenumbers/1',{
      //   method:'GET',
      //   headers:{"Content-Type":"application/json"},
      //   // body:JSON.stringify(companyDetails)
      // }).then((res)=>{
      //  // console.log(res.data);
      //   setVehicles(res.data.vehicles);
      // }).catch((err)=>{
      //   console.log(err);
      // })
    }
  }, []);

  //const user = JSON.parse(localStorage.getItem('user'));

  const backToLogin = () => {
    props.history.push("/login");
  };

  if (isLoggedIn === true) {
    return (
      <div className="ViwVehi">
        <Card
          style={{
            height: "200px",
            width: "85%",
            margin: "100px",
          }}
        >
          <CardBody style={{ margin: "40px 50px" }}>
            <FormGroup row>
              <Col md="3">
                <Label
                  htmlFor="select"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  Select Vehicle Number :
                </Label>
              </Col>
              <Col xs="12" md="8">
                <Input
                  type="select"
                  name="select"
                  id="select"
                  onChange={(e) => setVehicleNumber1(e.target.value)}
                >
                  <option value="0">Please select</option>
                  {vehicles.map((vehicle) => (
                    <option values={vehicle}> {vehicle}</option>
                  ))}
                </Input>
              </Col>
            </FormGroup>

            <br />
            <Row>
              <Col md="4"></Col>
              <Col md="4">
                <Button
                  block
                  color="primary"
                  className="btn-pill"
                  onClick={clickHandler}
                >
                  Edit Vehicle Data
                </Button>
              </Col>
              <Col md="4"></Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  } else if (isLoggedIn === false) {
    return (
      <BackToLogin/>
    );
  }
}
