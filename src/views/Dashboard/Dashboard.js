import React, { Component, lazy, Suspense,useState,useEffect } from 'react';
import axios from 'axios';
import {
  Col,
  Row,
} from 'reactstrap';








//class Dashboard extends Component {
const Dashboard = () =>{





//componentDidMount() {

//   const config = {
//     headers:{
//       Authorization: 'Bearer' + localStorage.getItem('token')
//     }
//   };
//
//
//   axios.post('http://127.0.0.1:8000/api/user/login','config')
//     .then((res) =>{
//       console.log(res);
//     })
// }





 const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>



    const user = JSON.parse(localStorage.getItem('user'));
;


  return (
    <div className="animated fadeIn">
      <h1>This is dashboard page</h1>
    </div>
  );






}

export default Dashboard;
