import React, {useState,useEffect} from 'react';
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Jumbotron, Label} from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";


const ViewCompanyDetails = (props) =>{

  const [companyName,setCompanyName] = useState('');
  const [companyLocation,setCompanyLocation] = useState('');
  const [companyAddress,setCompanyAddress] = useState('');

const [company_name,setCompany_name] = useState('travelX');
//const obj = {company_name};

  useEffect(()=>{
    axios.get('http://localhost:8000/api/getcompanydetails',{params:{company_name:props.match.params.id}})
      .then((res)=>{
        console.log(res.data);
        setCompanyName(res.data.company_name);
        setCompanyLocation(res.data.company_location);
        setCompanyAddress(res.data.company_address);
      })
      .catch((err)=>{
        console.log(err);
      })
  });



  return(
    <div>
      <Card>
        <CardHeader>
          <strong>View Company Details</strong>
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
                  disabled
                  // onChange={(e) => setCompanyName(e.target.value)}
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
                  disabled
                  // onChange={(e) => setCompanyLocation(e.target.value)}
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
                  disabled
                  // onChange={(e) => setCompanyAddress(e.target.value)}
                />

                {/*<FormText color="muted">Please Enter Transport Manager First Name </FormText>*/}
              </Col>
            </FormGroup>


            <Link>
            <Button
              type="submit"
              size="sm"
              color="primary"
            ><i className="fa fa-dot-circle-o" /> Back
            </Button>
            </Link>


            {/*<Button type="reset" size="sm" color="danger">*/}
            {/*  <i className="fa fa-ban" /> Reset*/}
            {/*</Button>*/}
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
