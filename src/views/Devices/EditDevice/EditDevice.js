import React, {useEffect,useState} from 'react';
import {Col, Form, FormGroup, Input, Label} from "reactstrap";
import axios from 'axios';


  export default function EditDevice () {

    const [id,setId] = useState("1");

      const [vehicles,setVehicles] = useState({});
      const[vehicle_num,setVehicle_num] = useState(null);


  //   useEffect(()=>{
  //     axios.get('http://localhost:8000/api/user/allvehiclenumbers')
  //       .then(res=>{
  //         console.log(res);
  //         setVehicles(res.data);
  //         console.log(vehicles);
  //       })
  //  .catch((err)=>{
  //   //handle error
  //   console.log(err);
  // })
  //   },[]);

// return(
//    <div>
//   //   {vehicles.map((vehicle)=>(
//   //     <div>
//   //       <h2>{vehicle}</h2>
//   //     </div>
//   //   ))}
//   </div>
// );


    // return(
    //   <div>
    //     {devices.map((device)=>(
    //       <div className="device" key={device.id}>
    //         <option>{device.name}</option>
    //       </div>
    //     ))}
    //   </div>
    // );



    // return (
    //   <div>
    //     <h1>This is edit device tab</h1>
    //     <FormGroup row>
    //       <Col md="3">
    //         <Label htmlFor="select">Vehicle Number</Label>
    //       </Col>
    //       <Col xs="12" md="9">
    //         <Input type="select" name="select" id="select">
    //           <option value="0">Please select</option>
    //
    //           <option value="1">1</option>
    //           <option value="2">2</option>
    //           <option value="3">3</option>
    //         </Input>
    //       </Col>
    //     </FormGroup>
    //   </div>
    //  );

}


