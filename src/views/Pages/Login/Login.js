import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import axios from "axios";
import Loader from "../../Required Sample Pages/Loader";
import Message from "../../Required Sample Pages/Message";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.submitFunc = this.submitFunc.bind(this);

    this.state = {
      email: "",
      password: "",
      token: "",
      res: [],
      success: false,
      notLogin: true,
      error: false,
      errorMessage: ''
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  //submit button handling
  submitFunc(e) {
    e.preventDefault();
    this.setState({success: true, notLogin: false});
    const obj = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(obj);
    axios.post("http://localhost:8000/api/login", obj, {
      // headers: {
      //   "content-type": "application/json",
      //   Authorization: "Bearer" + localStorage.getItem('token')
      // }
    })
      .then((res) => {

        console.log(res.data);
        //response data handling
        if (res.data.message === 'success') {

          // alert('Successfully Login');
          console.log(res.data.user.id);
          localStorage["token"] = res.data.access_token;
          localStorage["user_id"] = res.data.user.id;
          localStorage["companies_company_id"] = res.data.user.companies_company_id;
          localStorage['user_role_id'] = res.data.user.user_roles_role_id;
          localStorage['first_name'] = res.data.user.first_name;

          this.props.history.push('/home' + res.data.user.user_roles_role_id);

        } else {
          alert(res.data.message);
          this.setState({error: true, errorMessage: res.data.message})

          window.location.reload();
        }
      })
      //error handling
      .catch((err) => {
        alert(err);
        this.setState({notLogin: true, success: false})
      })

    this.setState({
      email: "",
      password: "",
    });
  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        {this.state.success && <Loader/>}
        {this.state.error && <Message variant='danger'>{this.state.errorMessage}</Message>}
        {this.state.notLogin &&
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.submitFunc}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>

                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          required
                          onChange={this.onChangeEmail}
                          placeholder="Email"
                          autoComplete="username"
                          value={this.state.email}
                        />
                      </InputGroup>

                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          onChange={this.onChangePassword}
                          required
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                        />
                      </InputGroup>

                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            <Link to="ForgotPassword">ForgotPassword</Link>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        }
      </div>
    );
  }
}

export default Login;
