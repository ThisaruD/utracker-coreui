import React,{useEffect,useState} from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import axios from "axios";
import {Redirect,Link} from 'react-router-dom';
import EditCompanyDetails from "./EditCompanyDetails";

const EditCompany = (props) => {


  const [companyNames, setCompanyNames] = useState([]);
  const [companyName, setCompanyName] = useState('');

  const[isLoggedIn,setIsLoggedIn] = useState(true);
  const[userId, setUserId] = useState('');
  const[userRoleID, setUserRoleID] = useState('');


  const clickHandler = () => {
    props.history.push('/company/details/' + companyName);
    console.log(companyName);
  }

  const backToLogin = () =>{props.history.push('/login');}

//https://run.mocky.io/v3/535d0e80-1eae-4404-bc8c-52d252fb9069 - run moky api
  useEffect(() => {

    const user = localStorage.getItem("user_id");
    setUserId(user);

    if(user==undefined){

      console.log('hi');
      setIsLoggedIn(false);
    }else{

      axios.get('http://localhost:8000/api/getallcompanies',{
        headers:{
          "Content-type":"application/json",
          Authorization:"Bearer"+localStorage.getItem('token')
        }
      })
        .then((res) => {
          console.log(res.data);
          setCompanyNames(res.data.companies);
        })

        .catch((err) => {
          console.log(err);
        })
    }

    setUserRoleID(localStorage.getItem('user_role_id'));
    }, [])

  //const user = JSON.parse(localStorage.getItem('user'));


  if(isLoggedIn===true){

    if(userRoleID==1 || userRoleID==2){
      return (
        <di>
          <h1>This edit company details page</h1>
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
                  onChange={(e) => setCompanyName(e.target.value)}
                >
                  <option value="0">Select Company Name</option>
                  {companyNames.map((company) => (
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
          <h1>Access Denided</h1>
        </div>
      );
    }










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

export default EditCompany;
