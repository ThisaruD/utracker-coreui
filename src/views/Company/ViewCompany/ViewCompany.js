import React, {useEffect, useState} from 'react';
import {Button, Col, FormGroup, Input, Label, Form, Row, Card, CardBody} from "reactstrap";
import axios from "axios";


const ViewCompany = (props) =>{


   const[name,setName] = useState('Dilshan');

  const [companyNames,setCompanyNames] = useState([]);
  const [companyName, setCompanyName] = useState('');

  const[isLoggedIn,setIsLoggedIn] = useState(true);
  const[userId, setUserId] = useState('');


  useEffect(()=>{


    const user = localStorage.getItem("user_id");
    setUserId(user);

    if(user==undefined){

      console.log('hi');
      setIsLoggedIn(false);
    }else {


      axios.get('http://localhost:8000/api/getallcompanies')
        .then((res) => {
          console.log(res.data);
          setCompanyNames(res.data.companies);
        })

        .catch((err) => {
          console.log(err);
        })
    }
  },[])

  const clickHandler=()=>{
    props.history.push('/company/details2/'+companyName);
    console.log(companyName);
  }

  const backToLogin = () =>{props.history.push('/login');}


  if(isLoggedIn===true){
    return(
      <di>
        <h1>This is view company details page</h1>
        <Form
          onSubmit={clickHandler}
        >
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="select">Company Name</Label>
            </Col>
            <Col xs="12" md="9">

              <Input
                type="select"
                name="company-name"
                id="company-name"
                onChange={(e)=>setCompanyName(e.target.value)}
              >
                <option value="0">Select Company Name</option>
                {companyNames.map((company)=>(
                  <option
                    values={company}

                  > {company}</option>
                ))}
              </Input>
            </Col>
          </FormGroup>
          <Row>
            <Col md="4"></Col>
            <Col md="4">
              <Button
                block color="primary"
                className="btn-pill"
                // onClick={clickHandler}
              >View Company Data</Button>
            </Col>
            <Col md="4"></Col>
          </Row>
        </Form>
      </di>
    );
  }else if(isLoggedIn===false){
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
  }





}

export default ViewCompany;
