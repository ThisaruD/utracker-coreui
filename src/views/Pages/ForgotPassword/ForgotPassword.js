import React, {Component, useState} from "react";
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


const ForgotPassword = (props) => {

  const [email, setEmail] = useState('');

  const resetEmail = {email};

  const resetButton = () => {
    axios.post('http://localhost:8000/api/forgot', resetEmail)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        //localStorage["token"] = res.data.token;



      })
      .catch((err) => {
        console.log(err);
      })

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
                    <h1>Forgot Password ?</h1>
                    <br/>
                    <p className="text-muted">
                      Enter Your email address and we'll send you a link to
                      reset your password
                    </p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        required
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>

                    <Row>
                      <Col xs="6">
                        <Button
                          color="primary"
                          className="px-4"
                          onClick={resetButton}
                        >Reset
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

export default ForgotPassword;
