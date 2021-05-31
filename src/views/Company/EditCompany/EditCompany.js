import React,{useEffect,useState} from 'react';
import {Button, Card, CardBody, Col, Form, FormGroup, Input, InputGroup, Label, Row} from "reactstrap";
import axios from "axios";
import {Redirect,Link} from 'react-router-dom';
import EditCompanyDetails from "./EditCompanyDetails";
import BackToLogin from "../../Required Sample Pages/BackToLogin";

const EditCompany = (props) => {


  const [companyNames, setCompanyNames] = useState([]);
  const [companyName, setCompanyName] = useState('');

  const[isLoggedIn,setIsLoggedIn] = useState(true);
  const[userId, setUserId] = useState('');
  const[userRoleId, setUserRoleId] = useState('');


  const clickHandler = () => {
    props.history.push('/company/details/' + companyName);
    console.log(companyName);
  }

  const backToLogin = () =>{props.history.push('/login');}

//https://run.mocky.io/v3/535d0e80-1eae-4404-bc8c-52d252fb9069 - run moky api
  useEffect(() => {

    setUserRoleId(localStorage.getItem('user_role_id'));

    const user = localStorage.getItem("user_id");
    setUserId(user);

    if (user == undefined) {
      setIsLoggedIn(false);
    } else {

      if(userRoleId === '1'){
        axios.get('http://localhost:8000/api/getallcompanies', {
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('token')
          }
        })
          .then((res) => {
            console.log(res.data);
            setCompanyNames(res.data.companies);
          })

          .catch((err) => {
            console.log(err);
          })
      }else{


        axios.get('http://localhost:8000/api/getallcompanies',{
          params: {
            company_id: localStorage.getItem('companies_company_id')
          }
        })
          .then((res) => {
            console.log(res.data)
            setCompanyNames(res.data.company);
          })
          .catch((err) => {
            console.log(err);
          })


      }
    }
  }, [userRoleId]);




  if(isLoggedIn===true){

    if(userRoleId==='1' || userRoleId==='2'){
      return (
        <di>
          <h1>This is Edit Company Details Page</h1>
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
          <div className="access_denied">
            <Card className="text-white bg-primary ">
              <CardBody>
                <div className="clearfix">
                  {/*<h1 className="float-left display-3 mr-4">403</h1>*/}
                  <h4 className="pt-3">Access Denied</h4>
                  <p className="text-muted float-left">
                    You don't have permission to access requested page.
                  </p>
                  <p className="text-muted float-left">
                    Please Contact Your Transport Manager
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
          );
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
                You don't have permission to access requested page. Please login
                first
              </p>
              <Row>
                <Col md="4"></Col>
                <Col md="4">
                  <Button
                    block
                    color="dark"
                    className="btn-pill"
                    onClick={backToLogin}
                  >
                    Login
                  </Button>
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
