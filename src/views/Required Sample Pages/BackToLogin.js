import React from 'react';
import {Button, Card, CardBody, Col, Row} from "reactstrap";

const BackToLogin = ({props,history}) => {


  const backToLogin = (props,history) =>{props.history.push('/login');}



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
            <p className="text-muted float-left">
              Please login first
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
};

export default BackToLogin;

// const deleteHandler = (id) => {
//   if (window.confirm('Are you sure')) {
//     dispatch(deleteUser(id));
//   }
// }

