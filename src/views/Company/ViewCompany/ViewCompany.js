import React,{useState} from 'react';
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Jumbotron, Label, Form, Row} from "reactstrap";


const ViewCompany = () =>{


  const[name,setName] = useState('Dilshan');

  return(
    <di>
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>Company Name</strong>
          <div className="card-header-actions">
            <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Jumbotron>
            {/*<h1 className="display-3">Hello, world!</h1>*/}
            {/*<p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra*/}
            {/*  attention to featured content or information.</p>*/}
            {/*<hr className="my-2" />*/}
            {/*<p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>*/}
            {/*<p className="lead">*/}
            {/*  <Button color="primary">Learn More</Button>*/}
            {/*</p>*/}
            <Card>
              <CardHeader>
                <strong>Details</strong>
                <small> Updated</small>
              </CardHeader>
              <CardBody>
                <Form>

                <FormGroup>
                  <Label htmlFor="company">Company Name</Label>
                  <Input type="text" id="disabled-input" placeholder="Enter your company name" value={name} disabled/>
                  {/*<Label id="disabled-input"></Label>*/}
                </FormGroup>

<Row>
                  <Col md="8">
                    <FormGroup>
                      <Label htmlFor="vat">Transport Manager </Label>
                      <Input type="text" id="vat" placeholder="DE1234567890" disabled/>
                    </FormGroup>
                  </Col>

                  <Col md="4">
                    <FormGroup>
                      <Label htmlFor="vat">Transport Manager </Label>
                      <Input type="text" id="vat" placeholder="DE1234567890" disabled/>
                    </FormGroup>
                  </Col>
</Row>


                <FormGroup>
                  <Label htmlFor="street">Staff</Label>
                  <Col md="3">
                    <Label htmlFor="select">Staff Members</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input type="select" name="select" id="select">
                      <option value="0">List of members</option>

                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </Input>
                  </Col>
                  {/*<Input type="text" id="street" placeholder="Enter street name" disabled/>*/}
                </FormGroup>

                <FormGroup row className="my-0">
                  <Col xs="8">
                    <FormGroup>
                      <Label htmlFor="city">City</Label>
                      <Input type="text" id="city" placeholder="Enter your city" disabled/>
                    </FormGroup>

                  </Col>
                  <Col xs="4">

                    <FormGroup>
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input type="text" id="postal-code" placeholder="Postal Code" disabled/>
                    </FormGroup>

                  </Col>

                </FormGroup>


                </Form>
              </CardBody>

            </Card>





          </Jumbotron>
        </CardBody>
      </Card>
    </di>
  );

}

export default ViewCompany;