import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import Carousel from "react-bootstrap/Carousel";

const SuperAdminHome = (props) => {


  const [index, setIndex] = useState(0);
  const [companyCount, setCompanyCount] = useState('');
  const [vehicleCount, setVehicleCount] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState('');


  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      console.log('hi');
      setIsLoggedIn(false);
    } else {
      axios.get('http://localhost:8000/api/getvehiclecount')
        .then((res) => {
          console.log(res.data);
          setVehicleCount(res.data.vehiclesCount);
        })
        .catch((err) => {
          console.log(err);
        })

      axios.get('http://localhost:8000/api/getcompanycount')
        .then((res) => {
          console.log(res.data);
          setCompanyCount(res.data.numberOfCompanies);
        })
        .catch((err) => {
          console.log(err);
        })

    }
  }, []);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const backToLogin = () => {
    props.history.push('/login');
  }

  const addCompany = () => {
    props.history.push('/company/add-company');
  }

  const addVehicle = () => {
    props.history.push('/vehicles/add-vehicle');
  }


  if (isLoggedIn === true) {
    return (
      <div>
        <h1>Welcome for SuperAdmin Dashboard</h1>
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info">
              <CardHeader>
                System Current Company Count
              </CardHeader>
              <CardBody>
                <Row>
                  <h2 text="center"><pre>      {companyCount}</pre></h2>
                <Button block color="primary" className="btn-pill" onClick={()=>props.history.push('/super-admin-company-details')} >More</Button>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-info">
              <CardHeader>
                System Current Vehicle Count
              </CardHeader>
              <CardBody>
                <h2 text="center"><pre>      {vehicleCount}</pre></h2>
                <Button block color="primary" className="btn-pill" onClick={()=>props.history.push('/super-admin-vehicle-details')}>More</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>


        <div>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://pficapitalltd.com/wp-content/uploads/2019/03/home.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Grow Your Business With More Clients</h3>
                <p>You can add company Here...</p>
                <Button
                  block color="primary"
                  className="btn-pill"
                  onClick={addCompany}
                >Add Company</Button>
              </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://rtvworldnetshipping.com/wp-content/uploads/2015/04/road.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Add More Vehicles</h3>
                <p>You can add vehicle here...</p>
                <Button
                  block color="primary"
                  className="btn-pill"
                  onClick={addVehicle}
                >Add Vehicle</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>
    );
  } else if (isLoggedIn === false) {
    return (
      <div className="access_denied">
        <Card className="text-white bg-primary ">
          <CardBody>
            <div className="clearfix">
              {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
              <h4 className="pt-3">Please login First</h4>
              <p className="text-muted float-left">
                You don't have permission to access requested page. Please login first
              </p>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <Button
                    block color="dark"
                    className="btn-pill"
                    onClick={backToLogin}
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

export default SuperAdminHome;
