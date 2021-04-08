import React from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';

export default function About (){

  return (
    <div>
      <Card className="card-about">
        <CardHeader className="card-about_header">
          <h3>ABOUT US</h3>
        </CardHeader>
        <CardBody className="card-about_cardbody">
          "Utracker" is a useful  vehicle tracking and managment system designed to cater to various fleet
          industries, both private and commercial. The GPS vehicle tracking system is useful for fleet
          maintenance, vehicle location monitoring,
          improving vehicle efficiency, theft prevention, and more.
          The system offers features like mobile app, multiple reports and with 24/7 reliable technical support.
        </CardBody>
      </Card>
    </div>
  );

}
