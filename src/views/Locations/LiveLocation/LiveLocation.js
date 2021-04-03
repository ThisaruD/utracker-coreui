import React,{Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";
import GoogleMapReact from 'google-maps-react';


const mapStyles = {
  width: '100%',
  height: '100%',
};


//const AnyReactComponent = ({ text }) => <div>{text}</div>;

class LiveLocation extends Component{


  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };



  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      date:[],
      name:[],
      company_id:"1",
      vehicleNumber:[],
      vehiclesLongLat:[],
      cords: [
        // {lat: 9.96233, lng: 49.80404},
        // {lat: 6.11499, lng: 50.76891},
        // {lat: 6.80592, lng: 51.53548},
        // {lat: 9.50523, lng: 51.31991},
        // {lat: 9.66089, lng: 48.70158}
           {lat: "7.0042083", lng: "79.9530489"},
            {lat: "6.8412134", lng: "79.9635795"},
        {lat: "6.9032139", lng: "79.9178106"}

    ],

      markerList:[],


    }
  }

  // static getDerivedStateFromProps(props,state){
  //
  //
  //
  //
  // }



  // static getDerivedStateFromProps(props, state) {
  //   // return {favoritecolor: props.favcol };
  //
  //     axios.get('http://localhost:8000/api/getuniquedata',{
  //       params:{
  //         company_id:props.company_id
  //       }
  //     })
  //       .then((res)=>{
  //         //console.log(res.data);
  //         //   for(let i=0;i<res.data.GPS_DATA.length;i++){
  //         //     for(let j=0;j<2;j++){
  //         //       //this.state.vehiclesLongLat=res.data;
  //         //       this.state.vehiclesLongLat.lat=res.data;
  //         //     }
  //         //   }
  //         // console.log(res.data);
  //         let x= res.data.GPS_DATA.length;
  //         let i,j,k,l;
  //         for(i=0,k=0,l=0,j=1;  k<x,l<x,i<x,j<=x;  k++,l++, i+=2, j+=2){
  //           props.vehicleNumber[k]=res.data.GPS_DATA[i];
  //           let coordinate = {
  //             lat : res.data.GPS_DATA[j][0].lat * 1,
  //             lng: res.data.GPS_DATA[j][0].lng * 1
  //           }
  //           props.vehiclesLongLat.push(coordinate);
  //           /* before code */
  //           //this.state.vehiclesLongLat[l]=res.data.GPS_DATA[j][0];
  //           //this.state.lat = this.state.vehiclesLongLat[l].lat;
  //
  //         }
  //
  //       })
  //       .then(()=>{
  //         console.log(props.vehicleNumber);
  //         console.log(props.vehiclesLongLat);
  //         props.isLoading = false;
  //
  //       })
  //       .catch((err)=>{
  //         console.log(err);
  //       })
  //   }







////////////////////////////////////////////////////////////////////////////////////////////////
  componentWillMount() {

    axios.get('http://localhost:8000/api/getuniquedata',{
      params:{
        company_id:this.state.company_id
      }
    },{
      headers:{
        "Content-type":"application/json",
        Authorization: "Bearer" + localStorage.getItem("token"),
      }
    })
      .then((res)=>{
        //console.log(res.data);
        //   for(let i=0;i<res.data.GPS_DATA.length;i++){
        //     for(let j=0;j<2;j++){
        //       //this.state.vehiclesLongLat=res.data;
        //       this.state.vehiclesLongLat.lat=res.data;
        //     }
        //   }
        // console.log(res.data);
        let x= res.data.GPS_DATA.length;
        let i,j,k,l;
        for(i=0,k=0,l=0,j=1;  k<x,l<x,i<x,j<=x;  k++,l++, i+=2, j+=2){
          this.state.vehicleNumber[k]=res.data.GPS_DATA[i];
          let coordinate = {
            lat : res.data.GPS_DATA[j][0].lat * 1,
            lng: res.data.GPS_DATA[j][0].lng * 1
          }
          this.state.vehiclesLongLat.push(coordinate);
          /* before code */
          //this.state.vehiclesLongLat[l]=res.data.GPS_DATA[j][0];
          //this.state.lat = this.state.vehiclesLongLat[l].lat;

        }

      })
      .then(()=>{
        console.log(this.state.vehicleNumber);
        console.log(this.state.vehiclesLongLat);
        this.state.isLoading = false;

      })
      .catch((err)=>{
        console.log(err);
      })


    //this.state.vehiclesLongLat = JSON.stringify(this.state.vehiclesLongLat);
  }
  //////////////////////////////////////////////////////////////////////////////////////////












  // showMarkers = () => {
  //
  //
  //     console.log("hello" + this.state.vehiclesLongLat);
  //     this.state.vehiclesLongLat.map((store) => {
  //       return <Marker position={{
  //         lat: store.lat,
  //         lng: store.lng
  //       }}
  //                      onClick={() => console.log("Clicked")}/>
  //     })
  //
  // }




  render(){

    return(
      <div
        style={{ height: '100vh', width: '100%' }}
      >


          <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{
              lat: 6.9271,
              lng: 79.8612
            }}>
            {this.state.coords.map((val)=>(
              <Marker
              position={{lat:val.lat, lng:val.lng}}
              />
            ))}





          </Map>
        {/*}*/}
      </div>
    );

  }


}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(LiveLocation)
//export default LiveLocation;
