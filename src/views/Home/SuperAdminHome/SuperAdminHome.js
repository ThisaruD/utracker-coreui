import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../../Required Sample Pages/Loader";

const SuperAdminHome = (props) => {

  const [index, setIndex] = useState(0);

  //==================for Super Admin=================================
  const [companyCount, setCompanyCount] = useState('');
  const [vehicleCount, setVehicleCount] = useState('');

  //===============for TM================================================
  const [transportManagerVehicleCount, setTransportManagerVehicleCount] = useState('');
  const [transportManagerUserCount, setTransportManagerUserCount] = useState('');
  const [loadingTMData, setLoadingTMData] = useState(true);
  const [loadTMData, setLoadTMData] = useState(false);

  const [staffMemberVehicleCount,setStaffMemberVehicleCount] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState('');
  const [userRoleId, setUserRoleId] = useState(null);


  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);
    setUserRoleId(localStorage.getItem('user_role_id'));

    if (user == undefined) {
      setIsLoggedIn(false);
    } else {


      if (userRoleId == 1) {
//for Super Admin
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
      } else if (userRoleId == 2) {
// for Transport Manager
        axios.get('http://localhost:8000/api/onecompanyvehiclecount/' + localStorage.getItem('companies_company_id'))
          .then((res) => {
            console.log(res.data);
            setTransportManagerVehicleCount(res.data.vehicle_count)
          })
          .catch((err) => {
            alert(err);
          })


        axios.get('http://localhost:8000/api/getusercount/' + localStorage.getItem('companies_company_id'), {
          params: {
            user_role_id: "3"
          }
        })
          .then((res) => {
            console.log(res.data);
            setTransportManagerUserCount(res.data.user_count);

          })
          .catch((err) => {
            console.log(err);
          })

        setLoadingTMData(false);
        setLoadTMData(true);
      }else{
        //for staff member

        axios.get('http://localhost:8000/api/onecompanyvehiclecount/' + localStorage.getItem('companies_company_id'))
          .then((res) => {
            console.log(res.data);
            setStaffMemberVehicleCount(res.data.vehicle_count)
          })
          .catch((err) => {
            alert(err);
          })


      }

    }
  }, [userRoleId]);


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


    if (userRoleId == 1) {
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
                    <h2 text="center">
                      <pre>      {companyCount}</pre>
                    </h2>
                    <Button block color="primary" className="btn-pill"
                            onClick={() => props.history.push('/super-admin-company-details')}>More</Button>
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
                  <h2 text="center">
                    <pre>      {vehicleCount}</pre>
                  </h2>
                  <Button block color="primary" className="btn-pill"
                          onClick={() => props.history.push('/super-admin-vehicle-details')}>More</Button>
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
    } else if (userRoleId == 2) {

      return (
        <div>
          <h1>Welcome To Transport Manager Dashboard</h1>
          <Row>
              <Col xs="12" sm="6" md="4">
                <Card className="text-white bg-info">
                  <CardHeader align="center">
                    <h2 style={{fontSize: "18px"}}>
                      Your Company Current Vehicles Count
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <h2 align="center">{transportManagerVehicleCount}</h2>
                    <br/>
                    <Button
                      block
                      color="primary"
                      className="btn-pill"
                      onClick={() =>
                        props.history.push("/transport-manager-vehicle-details")
                      }
                    >
                      More
                    </Button>
                  </CardBody>
                </Card>
              </Col>


              <Col xs="12" sm="6" md="4">
                <Card className="text-white bg-info">
                  <CardHeader align="center">
                    <h2 style={{fontSize: "18px"}}>
                      Your Company Current Staff Members Count
                    </h2>
                  </CardHeader>
                  <CardBody>
                    <h2 align="center">{transportManagerUserCount}</h2>
                    <br/>
                    <Button
                      block
                      color="primary"
                      className="btn-pill"
                      onClick={() =>
                        props.history.push("/transport-manager-user-details")
                      }
                    >
                      More
                    </Button>
                  </CardBody>
                </Card>
              </Col>


            </Row>
            <br/>
            <div>
              <Carousel activeIndex={index} onSelect={handleSelect}>
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
                      block
                      color="primary"
                      className="btn-pill"
                      onClick={addVehicle}
                    >
                      Add Vehicle
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
        </div>
    );
    } else
      {
        return (
          <div>
            <h1 style={{}}>Welcome To Staff Member Dashboard</h1>
            <br />
            <Col xs="12" sm="6" md="4">
              <Card className="text-white bg-info STMD">
                <CardHeader align="center">
                  <h2 style={{ fontSize: "18px" }}>
                    Your Company Current Vehicles Count
                  </h2>
                </CardHeader>
                <CardBody>
                  <h2 align="center">{staffMemberVehicleCount}</h2>
                  <br />
                  <Button
                    block
                    color="primary"
                    className="btn-pill"
                    onClick={() => {
                      props.history.push("/staff-member-vehicle-details");
                    }}
                  >
                    More
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <br />
            <div>
              <Carousel activeIndex={index} onSelect={handleSelect}>
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
                      block
                      color="primary"
                      className="btn-pill"
                      onClick={addVehicle}
                    >
                      Add Vehicle
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        );
      }


    } else if (isLoggedIn === false)
      {
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
