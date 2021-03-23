import React,{useEffect,useState} from 'react';
import {Button, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import axios from "axios";
import {Redirect,Link} from 'react-router-dom';

const EditCompany = (props) =>{


  const [companyNames,setCompanyNames] = useState([]);


  const clickHandler=()=>{
props.history.replace('/company/details');
  }

//https://run.mocky.io/v3/535d0e80-1eae-4404-bc8c-52d252fb9069 - run moky api
  useEffect(()=>{
    axios.get('http://localhost:8000/api/user/getallcompanies')
      .then((res)=>{
        console.log(res.data);
        setCompanyNames(res.data.companies);
      })

      .catch((err)=>{
        console.log(err);
      })
  },[])

  const user = JSON.parse(localStorage.getItem('user'));




    if(user.role_id==1 || user.role_id==2){
      return(
        <di>
          <h1>This edit company details page</h1>
          <Form onSubmit={clickHandler}>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="select">Company Name</Label>
              </Col>
              <Col xs="12" md="9">

                <Input type="select" name="company-name" id="company-name">


                  <option value="0">Select Company Name</option>
                  {companyNames.map((company)=>(
                    <option
                      values={company}

                    > {company}</option>
                  ))}





                  {/*<option value="1">1</option>*/}
                  {/*<option value="2">2</option>*/}
                  {/*<option value="3">3</option>*/}
                </Input>

              </Col>
            </FormGroup>
            <Row>
              <Col md="4"></Col>
              <Col md="4">
                <Button
                  block color="primary"
                  className="btn-pill"
                  onClick={clickHandler}
                >Edit Company Data</Button>
              </Col>
              <Col md="4"></Col>
            </Row>

          </Form>
        </di>
      );
    }else{
     return (
       <div>
         <h1>Not permission to edit device</h1>
       </div>
     );
    }





}

export default EditCompany;
