import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Label} from "reactstrap";

const EditCompanyDetails = (props) => {


  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const[companyId, setCompanyId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/getcompanydetails', {params: {company_name: props.match.params.id}}, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log(res.data);
        //setCompanyId(res.data.company_id);
        setCompanyName(res.data.company_name);
        setCompanyLocation(res.data.company_location);
        setCompanyAddress(res.data.company_address);
        setCompanyId(res.data.company_id);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [props.match.params.id]);


  const submitFunc = (e) => {
    e.preventDefault();

    axios.put('http://localhost:8000/api/updatecompanydetails', {companyName, companyLocation, companyAddress}, {
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer" + localStorage.getItem('token')
      }
    })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err);
      })



  }


  const deleteFunc = () => {
    axios.delete('http://localhost:8000/api/deletecompanydetails/'+companyId)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        //window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      })



  }

  const  goBack = () =>{
    props.history.push('/dashboard');
  }



  return (
    <div>
      <Card>
        <CardHeader>
          <strong>Edit Company Details</strong>
        </CardHeader>
        <CardBody>
          <Form
            encType="multipart/form-data"
            className="form-horizontal"
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
                  disabled
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
              </Col>
            </FormGroup>

            <Button
              type="reset"
              size="sm"
              color="primary"
              onClick={goBack}
            >
              <i className="fa fa-dot-circle-o"/>Back
            </Button>


            <Button
              size="sm"
              color="primary"
              onClick={submitFunc}
            ><i className="fa fa-dot-circle-o"/> Save Details
            </Button>

            <Button
              size="sm"
              color="danger"
              onClick={deleteFunc}
            >
              <i className="fa fa-ban"/> Delete Company
            </Button>
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>

  );
}

export default EditCompanyDetails;
