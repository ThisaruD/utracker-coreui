import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Form,
  Container,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";

const Logout = (props) => {
  const clickHandler = () => {
    localStorage.clear();
    props.history.push("/dashboard");
    window.location.reload();
  };

  return (
    <div>
      <Card style={{ width: "50%", marginTop: "10%", marginLeft: "25.5%" }}>
        <CardBody>
          <Form>
            <h1>Logout</h1>
            <br />
            <p className="text-muted">
              Do you really want to logout from U-tracker system ?
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
    </div>
  );
};
export default Logout;
