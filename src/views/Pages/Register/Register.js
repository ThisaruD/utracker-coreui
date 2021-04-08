import React, { useState,useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

const Register = (props) => {


  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyNames, setCompanyNames] = useState([]);
  const [company_name, setCompany_name] = useState('');
  const [user_role_id,SetUser_role_id ] = useState('');

  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [userId,setUserId] = useState(null);



useEffect(()=>{

  const user = localStorage.getItem("user_id");
  setUserId(user);


  if(user==undefined) {
    console.log('hi');
    setIsLoggedIn(false);
  }else{
    axios.get('http://localhost:8000/api/getallcompanies')
      .then((res)=>{
        console.log(res.data);
        setCompanyNames(res.data.companies);
      })
      .catch((err)=>{
        console.log(err);
      })
  }
  },[]);


const submitFunc = (e) => {
  e.preventDefault();
  const registerDetails = {first_name, last_name, email, password, company_name,user_role_id};
  console.log(registerDetails);

 // const headers = {'Content-Type': 'application/json'}

  axios.post('http://localhost:8000/api/register', registerDetails )
    .then((res) => {
      console.log(res.data);
      // localStorage.setItem('user', JSON.stringify({
      //   token: res.data.token
      // }));
      setCompany_name('');
      setFirst_name('');
      setLast_name('');
      setEmail('');
      setPassword('');
      SetUser_role_id('');
    });
}

  const backToLogin = () =>{props.history.push('/login');}




  if(isLoggedIn===true){
    return (
      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">
                  <Form onSubmit={submitFunc}>
                    <h1>Add User</h1>
                    {/*<h1>{this.state.companyNames[0]}</h1>*/}
                    <p className="text-muted">Create your account</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="firstname"
                        autoComplete="username"
                        required
                        onChange={(e) => setFirst_name(e.target.value)}
                        value={first_name}
                      />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text"
                             placeholder="lastname"
                             autoComplete="username"
                             required
                             onChange={(e) => setLast_name(e.target.value)}
                             value={last_name}
                      />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email"
                             placeholder="Email"
                             autoComplete="email"
                             required
                             onChange={(e) => setEmail(e.target.value)}
                             value={email}
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password"
                             placeholder="Password"
                             autoComplete="new-password"
                             required
                             onChange={(e) => setPassword(e.target.value)}
                             value={password}
                      />
                    </InputGroup>



                    <InputGroup className="mb-3">
                      <Input
                        type="select"
                        name="type"
                        id="type"
                        value={company_name}
                        onChange={(e)=>{setCompany_name(e.target.value)}}
                        //onChange={(e) => setType(e.target.value)}
                      >
                        <option value="0">Select Company Name</option>
                        {companyNames.map((company)=>(
                          <option values={company}
                                  onChange={(e)=>{setCompany_name(e.target.value)}}
                          >{company}</option>
                        ))}


                      </Input>
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <Input
                        type="select"
                        name="type"
                        id="type"
                        onChange={(e)=>{SetUser_role_id(e.target.value)}}
                        // value={this.state.userType}
                      >
                        <option value="null">Select User Type</option>
                        <option value="2">Transport Manager</option>
                        <option value="3">Staff</option>

                      </Input>
                    </InputGroup>
                    <Button color="success" block>Create Account</Button>
                  </Form>

                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }else if(isLoggedIn===false){
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

export default Register;
