import React, { useState} from 'react';
import {Row,Card,CardHeader,Table,CardBody,PaginationLink,PaginationItem,Badge,
        Pagination,Col,FormGroup,Input,Label,Form,Button} from 'reactstrap';


const MonthlyReport= ()=>{

  const [vehicleNumber, setVehicleNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const submitFunc = (e) =>{
    e.preventDefault();
    const obj = {vehicleNumber, month, year}
    console.log(obj);

    setVehicleNumber('');
    setMonth('');
    setYear('');
  }





    return (
      <div>


       <Row>
         <Col xs="12" lg="6">

           <Card>
             <CardHeader>
               <i className="fa fa-align-justify"></i> Monthly Running Report
             </CardHeader>
             <CardBody>
               <Table responsive>
                 <thead>
                 <tr>
                   <th>#</th>
                   <th>Vehicle Number</th>
                   <th>Total Distance</th>
                   <th>Payment(RS)</th>
                   <td>Status</td>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>1</td>
                   <td>GS-8666</td>
                   <td>28 Km</td>
                   <td>-</td>
                   <td>
                     <Badge color="secondary">Inactive</Badge>
                   </td>
                 </tr>
                 </tbody>
               </Table>
               <Pagination>
                 <PaginationItem>
                   <PaginationLink previous tag="button"></PaginationLink>
                 </PaginationItem>
                 <PaginationItem active>
                   <PaginationLink tag="button">1</PaginationLink>
                 </PaginationItem>
                 <PaginationItem>
                   <PaginationLink tag="button">2</PaginationLink>
                 </PaginationItem>
                 <PaginationItem>
                   <PaginationLink tag="button">3</PaginationLink>
                 </PaginationItem>
                 <PaginationItem>
                   <PaginationLink tag="button">4</PaginationLink>
                 </PaginationItem>
                 <PaginationItem>
                   <PaginationLink next tag="button"></PaginationLink>
                 </PaginationItem>
               </Pagination>
             </CardBody>
           </Card>
         </Col>

         <Col xs="12" lg="6">

           <Card>
             <CardHeader>
               <strong>Enter Details</strong>
               <small> For Monthly running report</small>
             </CardHeader>
             <CardBody>
               <Form onSubmit={submitFunc}>
               <Row>
                 <Col xs="12">
                   {/*<FormGroup>*/}
                   {/*  <Label htmlFor="name">Name</Label>*/}
                   {/*  <Input type="text" id="name" placeholder="Enter your name" required />*/}
                   {/*</FormGroup>*/}
                 </Col>
               </Row>
               <Row>
                 <Col xs="12">
                   <FormGroup>
                     <Label htmlFor="ccnumber">Vehicle Number</Label>
                     <Input type="text"
                            id="vehicle-number"
                            name="vehicle-number"
                            placeholder="NM-2345"
                            value={vehicleNumber}
                            onChange={(e) => {setVehicleNumber(e.target.value)}}
                            required
                     />
                   </FormGroup>
                 </Col>
               </Row>
               <Row>
                 <Col xs="4">
                   <FormGroup>
                     <Label htmlFor="ccmonth">Month</Label>
                     <Input type="select"
                            name="month"
                            id="month"
                            value={month}
                            onChange={(e) => {setMonth(e.target.value)}}
                     >
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                       <option value="11">11</option>
                       <option value="12">12</option>
                     </Input>
                   </FormGroup>
                 </Col>
                 <Col xs="4">
                   <FormGroup>
                     <Label htmlFor="ccyear">Year</Label>
                     <Input type="select"
                            name="year"
                            id="year"
                            value={year}
                            onChange={(e) => {setYear(e.target.value)} }
                     >
                       <option>2017</option>
                       <option>2018</option>
                       <option>2019</option>
                       <option>2020</option>
                       <option>2021</option>
                       <option>2022</option>
                       <option>2023</option>
                       <option>2024</option>
                       <option>2025</option>
                       <option>2026</option>
                     </Input>
                   </FormGroup>
                 </Col>
                 <Col xs="4">
                   {/*<FormGroup>*/}
                   {/*  <Label htmlFor="cvv">CVV/CVC</Label>*/}
                   {/*  <Input type="text" id="cvv" placeholder="123" required />*/}
                   {/*</FormGroup>*/}
                 </Col>
               </Row>


                   {/*<Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">*/}
                     <Button block color="primary" className="btn-pill" type="submit">Get Report</Button>
                   {/*</Col>*/}

               </Form>
             </CardBody>
           </Card>



         </Col>

       </Row>


      </div>
    );

}

export default MonthlyReport;

