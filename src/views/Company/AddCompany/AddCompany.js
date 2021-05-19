import React, {useState, useEffect} from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label, Row
} from "reactstrap";
import axios from "axios";
import Message from "../../Required Sample Pages/Message";


const AddCompany = (props) => {


  const user = JSON.parse(localStorage.getItem('user'));
//console.log(user.role_id);

  const [company_name, setCompany_name] = useState('');
  const [company_location, setCompany_location] = useState('');
  const [company_address, setCompany_address] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState('');
  const [userRoleId, setUserRoleId] = useState('');


  useEffect(() => {
    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      setIsLoggedIn(false);
    } else {
      setUserRoleId(localStorage.getItem('user_role_id'));
    }
  })


  const submitFunc = (e) => {
    e.preventDefault();
    const companyDetails = {company_name, company_location, company_address};
    console.log(companyDetails);

    axios.post("http://localhost:8000/api/savecompanydetails", companyDetails)
      .then((res) => {
        console.log(res.data);
        alert(res.data.reply);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });

    setCompany_name('');
    setCompany_address('');
    setCompany_location('');
  }

  const backToLogin = () => {
    props.history.push('/login');
  }

  const resetFunc = () => {
    setCompany_name('');
    setCompany_address('');
    setCompany_location('')
  }


  if (isLoggedIn === true) {

if(userRoleId==='1'){
  return (
    <div>
      <Card>
        <CardHeader>
          <strong>Add company</strong>
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
                  value={company_name}
                  onChange={(e) => setCompany_name(e.target.value)}
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
                  value={company_location}
                  onChange={(e) => setCompany_location(e.target.value)}
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
                  value={company_address}
                  onChange={(e) => setCompany_address(e.target.value)}
                />

                {/*<FormText color="muted">Please Enter Transport Manager First Name </FormText>*/}
              </Col>
            </FormGroup>


            <Button
              type="submit"
              size="sm"
              color="primary"
              onClick={submitFunc}

            ><i className="fa fa-dot-circle-o"/> Submit
            </Button>

            <Button
              onClick={resetFunc}
              size="sm"
              color="danger"
            ><i className="fa fa-ban"/> Reset
            </Button>
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}else{
  return(
    <div>
      <Message variant='danger'>You Don't Have Permission to Add Company</Message>
    </div>
  );

}




  } else if (isLoggedIn === false) {
    return (
      <div className="access_denied">
        <Card className="text-white bg-primary ">
          <CardBody>
            <div className="clearfix">
              {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
              <h4 className="pt-3">Please login First</h4>
              <p className="text-muted float-left">
                You don't have permission to access requested page. Please login first
              </p>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <Button
                    block color="dark"
                    className="btn-pill"
                    onClick={backToLogin}
                  >Login</Button>

                </Col>
                <Col md="4"></Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }


}

export default AddCompany;
