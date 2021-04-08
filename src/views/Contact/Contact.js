import React, {Component} from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';

export default function Contact (){

  return (
    <div>
      <Card className="card-contact">
        <CardHeader className="card-contact_header">
          <h3>CONTACT US</h3>
        </CardHeader>
        <CardBody className="card-contact_cardbody">
          <Row>
            <Col>
              <p><i class="fa fa-home" aria-hidden="true"><strong> Address</strong></i></p>
              <p>54/3 , Jayawardana Rd , Katubedda , Moratuwa</p>
            </Col>
            <Col>
              <p><i class="fa fa-phone" aria-hidden="true"><strong> Phone</strong></i></p>
              <p>+94 76 567 3451</p>
            </Col>
            <Col>
              <p><i class="fa fa-envelope" aria-hidden="true"><strong> Email</strong></i></p>
              <p>info@utracker.com</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );

}

