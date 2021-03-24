import React, {useState,useEffect} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Jumbotron, Label} from "reactstrap";
import axios from "axios";


const ViewCompanyDetails = () =>{

  const [companyName,setCompanyName] = useState('');
  const [companyLocation,setCompanyLocation] = useState('');
  const [companyAddress,setCompanyAddress] = useState('');

const [company_name,setCompany_name] = useState('travelX');
//const obj = {company_name};

  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/getcompanydetails',{params:{company_name}})
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  });



  return(
    <div>
      <Card>
        <CardHeader>
          <strong>Edit Company Details</strong>
        </CardHeader>

        <CardBody>
          <Form

            encType="multipart/form-data"
            className="form-horizontal"
            // onSubmit={submitFunc}
          >
            <FormGroup row>
              {/*space for empty row  */}
              <Col md="3">
                <Label></Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static">-</p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Company Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="company-name"
                  name="company-name"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                <FormText color="muted">Please Enter Company Name </FormText>
              </Col>
            </FormGroup>


            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Company Location</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="company-location"
                  name="company-location"
                  placeholder="company-location"
                  value={companyLocation}
                  onChange={(e) => setCompanyLocation(e.target.value)}
                />

                {/*<FormText color="muted">Please Enter Transport Manager First Name </FormText>*/}
              </Col>
            </FormGroup>


            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Company Address</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="company-address"
                  name="company-address"
                  placeholder="company-address"
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                />

                {/*<FormText color="muted">Please Enter Transport Manager First Name </FormText>*/}
              </Col>
            </FormGroup>


            <Button type="submit" size="sm" color="primary">
              <i className="fa fa-dot-circle-o" /> Submit
            </Button>
            <Button type="reset" size="sm" color="danger">
              <i className="fa fa-ban" /> Reset
            </Button>
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default ViewCompanyDetails;
// <h1>This view company details page</h1>
// <FormGroup row>
//   <Col md="3">
//     <Label htmlFor="select">Company Name</Label>
//   </Col>
//   <Col xs="12" md="9">
//     <Input type="select" name="select" id="select">
//       <option value="0">Please select</option>
//
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//     </Input>
//   </Col>
// </FormGroup>
