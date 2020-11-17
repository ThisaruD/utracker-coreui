import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';

class Register extends Component {

  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submitFunc = this.submitFunc.bind(this);


    this.state = {
      firstname:"",
      lastname:"",
      email: "",
      password: "",
      redirect:false,
    }

  }

  onChangeFirstName(e) {
    this.setState({

      firstname: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({

      lastname: e.target.value
    });
  }


  onChangeEmail(e) {
    this.setState({

      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  // renderRedirect = () => {
  //     if (this.props.redirect) {
  //         //return <Redirect to='/dashboard' component={Dashboard} />
  //         this.props.history.push('/dashboard');
  //     }
  // }



  submitFunc(e) {
    e.preventDefault();

    const obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    console.log(obj);
    axios.post('http://localhost:8000/api/user/register', obj)
      .then((res) => { console.log(res.data)})
      .then(alert('User added succesfuly'))
      .then( this.props.history.push('/home'));




    this.setState({
      firstname:'',
      lastname:'',
      email: '',
      password: '',
      redirect:true
    });
    //this.renderRedirect();
  }




  render() {
    return (
      <div className="app flex-row align-items-center">

        <Container>

          <Row className="justify-content-center">

            <Col md="9" lg="7" xl="6">

              <Card className="mx-4">

                <CardBody className="p-4">
                  <Form onSubmit={this.submitFunc}>
                    <h1>Register</h1>
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
                        onChange={this.onChangeFirstName}
                        value={this.state.firstname}
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
                             onChange={this.onChangeLastName}
                             value={this.state.lastname}
                      />
                    </InputGroup>


                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
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
                             onChange={this.onChangePassword}
                             value={this.state.password}
                      />
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
  }
}

export default Register;
