import React from 'react';
import {Col, FormGroup, Input, Label} from "reactstrap";


  const ViewDevice = () =>{

    return (
      // <div>
      //   <h1>This is view device tab</h1>
      // </div>
      <div>
        <h1>View Device Details</h1>
        <FormGroup row>
          <Col md="3">
            <Label htmlFor="select">Vehicle Number</Label>
          </Col>
          <Col xs="12" md="9">
            <Input type="select" name="select" id="select">
              <option value="0">Please select</option>

              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Input>
          </Col>
        </FormGroup>
      </div>
    );

}

export default ViewDevice;
