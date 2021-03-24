import React from 'react';
import {Card, CardBody, CardHeader} from "reactstrap";



const  AccessDenied = (props) =>{

  return(
    <div>
      <Card className="text-white bg-warning">
        <CardHeader>
          Card title
        </CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </CardBody>
      </Card>
    </div>
  );
}


export default AccessDenied;
