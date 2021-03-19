import React from 'react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label
} from "reactstrap";


const EditDeviceData = (props) =>{

  return(

    <div>
      <Card>
        <CardHeader>
          <strong>Add vehicles</strong>
        </CardHeader>
        <CardBody>
          <Form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal"
            onSubmit={}
          >
            <FormGroup row>
              {/*space for empty row  */}
              <Col md="3">
                <Label></Label>
              </Col>
              <Col xs="12" md="9">
                <p className="form-control-static">-</p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Vehicle Number</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="vehicle-number"
                  name="vehicle-number"
                  placeholder="Vehicle Number"
                  value={}
                  onChange={}
                />
                <FormText color="muted">Please enter vehicle number</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="6">
                <Label htmlFor="text-input">Type</Label>
                <Input
                  type="select"
                  name="type"
                  id="type"
                  value={}
                  onChange={}
                >
                  <option value="0">Please select type</option>
                  <option value="1">Van</option>
                  <option value="2">Car</option>
                  <option value="3">Bus</option>
                  <option value="3">Truck</option>
                </Input>
              </Col>
              <Col md="6">
                <Label>Brand Name</Label>
                <Input
                  type="text"
                  id="brand-name"
                  name="brand-Name"
                  placeholder="Vehicle brand name"
                  value={}
                  onChange={}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Driver Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="driver-name"
                  name="driver-name"
                  placeholder="Driver Name"
                  value={}
                  onChange={}
                />
                <FormText className="help-block">Enter driver name</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Driver Contact Number</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="driver-contact-number"
                  name="driver-contact-number"
                  placeholder="Driver Contact Number"
                  // autoComplete="text"
                  value={}
                  onChange={}
                />
                <FormText className="help-block">
                  Enter driver contact number
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Owner Name</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="owner-name"
                  name="owner-name"
                  placeholder="Owner Name"
                  onChange={}
                />
                <FormText className="help-block">Enter owner name</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Owner Contact Number</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="text"
                  id="owner-contact-number"
                  name="owner-contact-number"
                  placeholder="Owner Contact Number"
                  value={}
                  onChange={}
                />
                <FormText className="help-block">
                  Enter owner contact number
                </FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>
                  Date Input <Badge>NEW</Badge>
                </Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="date"
                  id="date-added"
                  name="date-added"
                  placeholder="date"
                  value={}
                  onChange={}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label>Unit per Km</Label>
              </Col>
              <Col xs="12" md="9">
                <Input
                  type="select"
                  name="unit-per-km"
                  id="unit-per-km"
                  value={}
                  onChange={}
                >
                  <option value="0">Please select</option>
                  <option value="1">Rs:100</option>
                  <option value="2">Rs:200</option>
                  <option value="3">Rs:300</option>
                </Input>
              </Col>
            </FormGroup>

            <Button type="submit" size="sm" color="primary">
              <i className="fa fa-dot-circle-o" /> Submit
            </Button>
            <Button type="reset" size="sm" color="danger">
              <i className="fa fa-ban" /> Reset
            </Button>
          </Form>
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default EditDeviceData;
