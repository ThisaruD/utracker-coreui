import React, {useEffect, useState} from "react";
import axios from "axios";
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import Loader from "../../Required Sample Pages/Loader";


const TransportManagerUserDetails = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nic, setNic] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(false);


  useEffect(()=>{

    axios.get('http://localhost:8000/api/getusersdetails',{
      params:{
        companies_company_id:localStorage.getItem('companies_company_id'),
        user_role_id:'3'
      }
    })
      .then((res)=>{
        console.log(res.data);
        setUsers(res.data.user_details);
        setLoading(false);
        setDataLoad(true);
      })
      .catch((err)=>{
        console.log(err);
      })

  },[dataLoad,loading]);


  const userDeleteFunc =(id)=>{


    axios.delete('http://localhost:8000/api/deleteuserdetails/'+id)
      .then((res)=>{
        alert(res.data.message);
      })
      .then(()=>{
        window.location.reload();
      })
      .catch((err)=>{
        alert(err);
      })
  }

  const headerStyle = {
    backgroundColor:  ' #4d94ff',

  };




  return (
    <div>
      <h1 style={headerStyle}>This is User details page</h1>
      {loading &&<Loader/>}
      {dataLoad &&

      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i>Vehicles List
        </CardHeader>
        <CardBody>
          <Table responsive bordered>
            <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>NIC</th>
              <th>Contact No</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.nic}</td>
                <td>{user.contact_no}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: `#c7081e`,
                      color: "white",
                      borderRadius: "5px",
                      borderColor: "white",
                    }}
                    size="sm"
                    onClick={() => userDeleteFunc(user.id)}
                  >
                    Delete User Account
                  </button>
                </td>
              </tr>

            ))}
            </tbody>
          </Table>
          <Row>
            <Col md="4">
              <Button
                block
                color="primary"
                className="btn-pill"
                onClick={() => props.history.push("/super-admin-home")}
              >
                Back
              </Button>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>
        </CardBody>
      </Card>
      }
    </div>
  );


}
export default TransportManagerUserDetails;
