import React,{useState,useEffect} from 'react';
import axios from "axios";

const SuperAdminHome = () =>{


  const[companyCount,setCompanyCount] = useState('');
  const[vehicleCount,setVehicleCount] = useState('');




  useEffect(()=>{

    axios.get('http://localhost:8000/api/getvehiclecount')
      .then((res)=>{
        console.log(res.data);
        setVehicleCount(res.data.vehiclesCount);
      })
      .catch((err)=>{
        console.log(err);
      })

    axios.get('http://localhost:8000/api/getcompanycount')
      .then((res)=>{
        console.log(res.data);
        setCompanyCount(res.data.numberOfCompanies);
      })
      .catch((err)=>{
        console.log(err);
      })



  });




  return(
    <div>
      <h1>This is SuperAdmin Home  screen</h1>
    </div>
  );
}

export default SuperAdminHome;
