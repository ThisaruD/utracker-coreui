import React,{Component} from 'react';
import {GoogleApiWrapper, Map, Marker} from "google-maps-react";
import axios from "axios";


const mapStyles = {
  width: '100%',
  height: '100%',
};


class LiveLocation extends Component{


  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      date:[],
      name:[],
      company_id:"1",
      vechileNumber:[],
      vehiclesLongLat:[],
      cords: [
        // {lat: 9.96233, lng: 49.80404},
        // {lat: 6.11499, lng: 50.76891},
        // {lat: 6.80592, lng: 51.53548},
        // {lat: 9.50523, lng: 51.31991},
        // {lat: 9.66089, lng: 48.70158}
     //    {lat: "7.0042083", lng: "79.9530489"},
     //     {lat: "6.8412134", lng: "79.9635795"},
     // {lat: "6.9032139", lng: "79.9178106"}

      ],

      markerList:[]

    }
  }



  // showMarkers = () => {
  //   return this.state.cords.map((store, index) => {
  //     return <Marker key={index} id={index} position={{
  //       lat: store.lat,
  //       lng: store.lng
  //     }}
  //                    onClick={() => console.log("Clicked")} />
  //   })
  // }

////////////////////////////////////////////////////////////////////////////////////////////////
  componentDidMount() {

    axios.get('http://localhost:8000/api/getuniquedata',{
      params:{
        company_id:this.state.company_id
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
              this.state.vechileNumber[k]=res.data.GPS_DATA[i];
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
        console.log(this.state.vechileNumber);
        console.log(this.state.vehiclesLongLat);
        this.state.isLoading = false;

      })
      .catch((err)=>{
        console.log(err);
      })

    //this.state.vehiclesLongLat = JSON.stringify(this.state.vehiclesLongLat);
  }


//////////////////////////////////////////////////////////////////////////////////////////


  showMarkers = () => {
    console.log("hello"+this.state.vehiclesLongLat);
    this.state.vehiclesLongLat.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
                     onClick={() => console.log("Clicked")} />
    })
  }




  render(){

    return(
      <div>
        {this.state.isLoading && <h1>Loading</h1>}
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{
            lat: 6.9271,
            lng: 79.8612
          }}>
          {this.showMarkers()}
        </Map>
      </div>
    );

  }


}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDpv6eCg72bvXFAtKzEO_fpJ1Rgy1-MTb0")
})(LiveLocation)
//export default LiveLocation;
