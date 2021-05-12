import React, {useEffect, useState} from "react";
import axios from "axios";
import {Badge, Button, Card, CardBody, CardHeader, Col, Row, Table} from "reactstrap";
import Loader from "../../Required Sample Pages/Loader";


const SuperAdminCompanyDetails = (props) =>{

  const[companies,setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoad, setDataLoad] = useState(false);


  useEffect(()=>{




    axios.get('http://localhost:8000/api/getallcompaniesdetails')
      .then((res)=>{
        console.log(res.data);
        setCompanies(res.data.companies);
        setLoading(false);
        setDataLoad(true);
      })
      .catch((err)=>{
        console.log(err);
        })
  },[dataLoad, loading]);


  const headerStyle = {
    backgroundColor:  ' #4d94ff',

  };


  return(
    <div>
      <h1 style={headerStyle}>This is company details page</h1>
      {loading && <Loader/>}
      {dataLoad &&
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
            {companies.map((company) => (
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
              <Button block color="primary" className="btn-pill"
                      onClick={() => props.history.push('/super-admin-home')}>Back</Button>
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

export default SuperAdminCompanyDetails;
