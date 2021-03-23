import React from 'react';

import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Jumbotron, Label} from "reactstrap";


const ViewCompanyDetails = () =>{




  return(
    <div>
      <Card>
        <CardHeader>
          <i className="fa fa-align-justify"></i><strong>Jumbotron</strong>
          <div className="card-header-actions">
            <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
              <small className="text-muted">docs</small>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Jumbotron>
            <h1 className="display-3">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
              attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
            <p className="lead">
              <Button color="primary">Learn More</Button>
            </p>
          </Jumbotron>
        </CardBody>
      </Card>
    </div>
  );
}

export default ViewCompanyDetails;
// <h1>This view company details page</h1>
// <FormGroup row>
//   <Col md="3">
//     <Label htmlFor="select">Company Name</Label>
//   </Col>
//   <Col xs="12" md="9">
//     <Input type="select" name="select" id="select">
//       <option value="0">Please select</option>
//
//       <option value="1">1</option>
//       <option value="2">2</option>
//       <option value="3">3</option>
//     </Input>
//   </Col>
// </FormGroup>
