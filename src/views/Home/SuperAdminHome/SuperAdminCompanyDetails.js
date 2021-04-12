import React, {useEffect, useState} from "react";
import axios from "axios";
import {Badge, Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";


const SuperAdminCompanyDetails = (props) =>{

  const[companies,setCompanies] = useState([]);



  useEffect(()=>{




    axios.get('http://localhost:8000/api/getallcompaniesdetails')
      .then((res)=>{
        console.log(res.data);
        setCompanies(res.data.companies);
      })
      .catch((err)=>{
        console.log(err);
        })
  },[]);


  return(
    <div>
      <h1>This is company details page</h1>

      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i>Companies List
        </CardHeader>
        <CardBody>
          <Table responsive bordered>
            <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Location</th>
              <th>Company Address</th>
              <th>Added At</th>
            </tr>
            </thead>
            <tbody>
            {companies.map((company)=>(
                <tr>
                <td>{company.company_name}</td>
                  <td>{company.company_location}</td>
                  <td>{company.company_address}</td>
                  <td>{company.created_at}</td>
              </tr>
              ))}
            </tbody>
          </Table>
          <Row>
            <Col md="4">
              <Button block color="primary" className="btn-pill" onClick={()=>props.history.push('/super-admin-home')}>Back</Button>
            </Col>
            <Col md="4"></Col>
            <Col md="4"></Col>
          </Row>



        </CardBody>
      </Card>
    </div>
  );
}

export default SuperAdminCompanyDetails;
