import React from 'react'
import {Button, Card, CardBody, CardFooter, CardHeader, Col, Form, FormGroup, FormText, Input, Label,} from 'reactstrap';
import {Link} from "react-router-dom";




const Profile = () =>{

  return(
    <div>
      <Card>

        <CardHeader>
          <strong>User Profile</strong> information
        </CardHeader>

        <CardBody>
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

            <FormGroup row>
              <Col md="3">
                <Label>Static</Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static">Username</p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Text Input</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="text" id="text-input" name="text-input" placeholder="Text" />
                <FormText color="muted">This is a help text</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="email-input">Email Input</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="email" id="email-input" name="email-input" placeholder="Enter Email" autoComplete="email"/>
                <FormText className="help-block">Please enter your email</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="password-input">Password</Label>
              </Col>
              <Col xs="12" md="9">
                <Input type="password" id="password-input" name="password-input" placeholder="Password" autoComplete="new-password" />
                <FormText className="help-block">Please enter a complex password</FormText>
              </Col>
            </FormGroup>

          </Form>
        </CardBody>

        <CardFooter>

          <Button type="reset" size="sm" color="danger"><i className="cui-arrow-left"></i> Back</Button>
          <Button
            type="submit"
            size="sm"
            color="primary"
          ><i className="fa fa-dot-circle-o"></i>Edit Profile</Button>


        </CardFooter>

      </Card>
    </div>
  );
}
export default Profile;
