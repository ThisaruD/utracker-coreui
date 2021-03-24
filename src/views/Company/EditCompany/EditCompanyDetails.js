import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";

const EditCompanyDetails = (props) => {


  const[companyName,setCompanyName] = useState('');
  const[companyLocation,setCompanyLocation] = useState('');
  const[companyAddress,setCompanyAddress] = useState('');


useEffect(()=>{
  axios.get('http://localhost:8000/api/user/getcompanydetails',{params:{company_name:props.match.params.id}})
    .then((res)=>{
      console.log(res.data);
      setCompanyName(res.data.company_name);
      setCompanyLocation(res.data.company_location);
      setCompanyAddress(res.data.company_address);
    })
    .catch((err)=>{
      console.log(err);
    })
})


  const submitFunc = (e) =>{
e.preventDefault();

  }




  return (
//     <div>
// <h1>{props.match.params.id}</h1>
//   <h1>{companyName}</h1>
//   <h1>{companyAddress}</h1>
//   <h1>{companyLocation}</h1>
//     </div>


    <div>
      <Card>
        <CardHeader>
          <strong>Edit Company Details</strong>
        </CardHeader>

        <CardBody>
          <Form

            encType="multipart/form-data"
            className="form-horizontal"
            onSubmit={submitFunc}
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

export default EditCompanyDetails;
