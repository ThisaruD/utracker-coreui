import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form, Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import {Link} from "react-router-dom";




const Logout = (props) =>{


   const clickHandler = () =>{
     localStorage.clear();
     //props.history.push('/login');

   }



  return(
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Logout</h1>
                    <br />
                    <p className="text-muted">
                      Do you really want to logout from U-tracker system
                    </p>


                    <Row>
                      <Col xs="6">
                        <Link to="ResetPassword">
                          <Button
                            color="primary"
                            className="px-4"
                            onClick={clickHandler}
                          >
                            Logout
                          </Button>
                        </Link>
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
export default Logout;
