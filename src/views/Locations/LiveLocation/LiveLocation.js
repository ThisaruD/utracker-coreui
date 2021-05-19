import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import 'reactjs-popup/dist/index.css';
import Message from "../../Required Sample Pages/Message";


const mapStyles = {
  width: '100%',
  height: '100%',
};


class LiveLocation extends Component {


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      date: [],
      name: [],
      vehicleNumber: [],
      vehiclesLongLat: [],
      markerList: [],
      isLoggedIn: true,
      userId: '',
      status: false,
      userRoleId:''
    }
  }


////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {
    const user = localStorage.getItem("user_id");

    this.setState({
      userRoleId:localStorage.getItem('user_role_id')
    });

    if(user==undefined){
      this.setState({
        isLoggedIn:false
      });
    }else{
      axios.get('http://localhost:8000/api/getuniquedata', {
        params: {
          company_id: localStorage.getItem('companies_company_id')
        }
      })
        .then((res) => {
          console.log(res.data);
          // console.log(res.data["GPS_DATA"][0]["vehiclenum"])

          res.data["GPS_DATA"].map(value => {
            // console.log(value.vehiclenum)
            let coordinate = {
              lat: value.latitude,
              lng: value.longitude,
              vehicleNum: value.vehiclenum
            };
            this.state.vehiclesLongLat.push(coordinate);
          });

          this.setState({
            status: true
          })


        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////


  backToLogin = () => {
    this.props.history.push('/login');
  }


  render() {


    if (this.state.isLoggedIn === true) {


      if(this.state.userRoleId==='1'){
        return (
          <div>
            <Message variant='danger'>You Don't Have Permission For Location Tab</Message>
          </div>
        );
      }else{
        return (
          <div>
            {this.state.status ?
              <Map
                google={this.props.google}
                zoom={9}
                style={mapStyles}
                initialCenter={{
                  lat: 7.0042083,
                  lng: 79.9530489
                }}>
                {this.state.vehiclesLongLat.map((store, index) => {
                  return (<Marker key={index} id={index} position={{
                    lat: store.lat,
                    lng: store.lng
                  }}
                                  onMouseover={() => {
                                    window.alert(store.vehicleNum)
                                  }}
                  />)

                })}
              </Map>
              : null}
          </div>
        );
      }

    } else if (this.state.isLoggedIn === false) {
      return (
        <div className="access_denied">
          <Card className="text-white bg-primary ">
            <CardBody>
              <div className="clearfix">
                <h4 className="pt-3">Please login First</h4>
                <p className="text-muted float-left">
                  You don't have permission to access requested page. Please login first
                </p>
                <p className="text-muted float-left">
                  Please login first
                </p>
                <Row>
                  <Col md="4"></Col>
                  <Col md="4">
                    <Button
                      block color="dark"
                      className="btn-pill"
                      onClick={this.backToLogin}
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
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(LiveLocation)

