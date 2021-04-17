import React, {Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";
import GoogleMapReact from 'google-maps-react';
import {Button, Card, CardBody, Col, Row} from "reactstrap";
import {GoogleMap} from "react-google-maps";


const mapStyles = {
  width: '100%',
  height: '100%',
};


class LiveLocation extends Component {

  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };

  constructor(props) {
    super(props);
    // this.showMarkers = this.showMarkers.bind(this);
    this.backToLogin = this.backToLogin.bind(this);
    this.state = {
      isLoading: true,
      date: [],
      name: [],
      company_id: "1",
      vehicleNumber: [],
      vehiclesLongLat: [],
      cords: [
        // {lat: 9.96233, lng: 49.80404},
        // {lat: 6.11499, lng: 50.76891},
        // {lat: 6.80592, lng: 51.53548},
        // {lat: 9.50523, lng: 51.31991},
        // {lat: 9.66089, lng: 48.70158}
        // {lat: "7.0042083", lng: "79.9530489"},
        //  {lat: "7.0042317", lng: "79.9531022"},
        {lat: "8.0408", lng: "79.8394"}

      ],

      markerList: [],
      isLoggedIn: true,
      userId: '',
    }
  }


////////////////////////////////////////////////////////////////////////////////////////////////
  async componentDidMount() {

    let user = localStorage.getItem("user_id");

    if (user == undefined) {
      this.setState({
        isLoggedIn: false
      });
    }else{
     await axios.get('http://localhost:8000/api/getuniquedata', {
        params: {
          company_id: this.state.company_id
        }
      }, {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        }
      })
        .then((res) => {
          console.log(res.data);

          for (let i = 0; i < res.data.GPS_DATA.length; i++) {

            let coordinates = {
              lat: res.data.GPS_DATA[i].latitude,
              lng: res.data.GPS_DATA[i].longitude
            }

            this.state.cords.push(coordinates);
            //  this.state.cords.setState({
            //    lat:coordinates.lat,
            //    lng:coordinates.lng
            //  });
          }
          console.log(this.state.cords);

        })

        .catch((err) => {
          console.log(err);
        })


    }
    //this.state.vehiclesLongLat = JSON.stringify(this.state.vehiclesLongLat);


  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


  backToLogin() {
    this.props.history.push('/login');
  }


  // showMarkers() {
  //
  //
  //
  //   console.log('hi');
  //   console.log(this.state.cords);
  //
  //   return this.state.cords.map((store, index) => (
  //       <Marker key={index} id={index} position={{
  //       lat: store.lat,
  //       lng: store.lng,
  //
  //     }}
  //
  //                    onClick={() => console.log("Clicked")}/>
  //   ));
  //
  // }


  render() {


    // if(this.state.isLoggedIn===true){
    if (this.state.isLoggedIn == true) {


      return (
        <Map
          google={this.props.google}
          zoom={9}
          style={mapStyles}
          initialCenter={{
            lat: 7.0042083,
            lng: 79.9530489
          }}>
          {this.state.cords.map((cord)=>(
            <Marker
              position={{lat:cord.lat,lng:cord.lng}}
            />
          ))}
        </Map>


      );


    }else if (this.state.isLoggedIn == false) {
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


    // }else if(this.state.isLoggedIn===false){
    //   return (
    //     <div className="access_denied">
    //       <Card className="text-white bg-primary ">
    //         <CardBody>
    //           <div className="clearfix">
    //             {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
    //             <h4 className="pt-3">Please login First</h4>
    //             <p className="text-muted float-left">
    //               You don't have permission to access requested page. Please login first
    //             </p>
    //             <Row>
    //               <Col md="4"></Col>
    //               <Col md="4">
    //                 <Button
    //                   block color="dark"
    //                   className="btn-pill"
    //                   //onClick={this.goBack()}
    //                 >Login</Button>
    //
    //               </Col>
    //               <Col md="4"></Col>
    //             </Row>
    //           </div>
    //         </CardBody>
    //       </Card>
    //     </div>
    //   );


  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(LiveLocation)
//export default LiveLocation;
