import React, {useState} from "react";
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

const ResetPassword = (props) => {

  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [token,setToken] = useState('');

 // setToken( props.match.params.id);


  const submitFunc = () => {
    setToken( props.match.params.id);
    if(password===reEnterPassword){
      const obj ={password,token}
      axios.post('http://localhost:8000/api/reset',obj)
        .then((res) => {
        alert(res.data.message);
        props.history.push('/login');
        })
        .catch((err) => {
          console.log(err);
        })
    }else{
      alert('Password Mismatch');
    }
  }


  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Reset Password</h1>
                    <br/>
                    <p className="text-muted">New Password</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="New Password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}

                      />
                    </InputGroup>
                    <p className="text-muted">Re-enter Your New Password</p>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        autoComplete="new-password"
                        value={reEnterPassword}
                        onChange={(e) => setReEnterPassword(e.target.value)}
                      />
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={submitFunc}
                        >Reset Password
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
    </div>
  );

}

export default ResetPassword;
