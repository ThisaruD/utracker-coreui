import React,{useState,useEffect} from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  InputGroupText,
  InputGroupAddon,
  InputGroup,
  Row, Col
} from "reactstrap";
import axios from "axios";


const Profile = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [nicNumber, setNicNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');


  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [userId,setUserId] = useState("");




  useEffect(()=>{

  //check user is available
    const user = localStorage.getItem("user_id");
    if(user==undefined){

       console.log('hi');
       setIsLoggedIn(false);
   }else{

  //get user details from DB
      axios.get('http://localhost:8000/api/getuserdetails/'+localStorage.getItem("user_id"),{
        headers:{
          "content-type":"application/json",
          Authorization:"Bearer " + localStorage.getItem('token'),
        },
      })
        .then((res) => {
          console.log(res.data);
          setFirstName(res.data.user[0].first_name);
          setLastName(res.data.user[0].last_name);
          setEmail(res.data.user[0].email);
          setNicNumber(res.data.user[0].nic);
          setContactNumber(res.data.user[0].contact_no);

        })
        .catch((err) => {
          console.log(err);
        })
    }

    },[]);



// submit function handler
  const submitFunc = (e) => {
    e.preventDefault();
    const profileDetails = {
      firstName,
      lastName,
      email,
      nicNumber,
      contactNumber,
      password,
    };
    console.log(profileDetails);


    fetch('http://localhost:8000/api/updateuserdetails/'+userId,{
      method:'PUT',
       headers:{"Content-Type":"application/json"},
      body:JSON.stringify(profileDetails)
    }).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }


  const goBack = () => { props.history.push('/dashboard'); }
  const backToLogin = () =>{props.history.push('/login');}
  const editProfileHandler = () =>{props.history.push('/profile-edit')}


  if(isLoggedIn==true){
    return (
      <div>
        <Card className="userProfile">
          <CardHeader className="userProfile_header">
            <strong>User Profile</strong> information
          </CardHeader>
          <CardBody className="userProfile_body">
            <Form action="" method="post" onSubmit={submitFunc}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-envelope"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="email"
                    id="email1"
                    name="email1"
                    placeholder="Email"
                    value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-id-card-o"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="nicNumber"
                    name="nicNumber"
                    placeholder="NIC Number"
                    value={nicNumber}
                    // onChange={(e) => setNicNumber(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-phone"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={contactNumber}
                    // onChange={(e) => setContactNumber(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>


              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-asterisk"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    id="password1"
                    name="password1"
                    placeholder="Password"
                    value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    disabled
                  />
                </InputGroup>
              </FormGroup>


              <FormGroup className="form-actions">
                <Button
                  type="submit"
                  size="sm"
                  color="primary"
                  className="profBut"
                  onClick={goBack}
                >
                  Back
                </Button>



                <Button
                  type="submit"
                  size="sm"
                  color="secondary"
                  className="profBut"
                  onClick={editProfileHandler}
                >
                  Edit Profile
                </Button>
              </FormGroup>


            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }else if(isLoggedIn==false){
    return (
      <div className="access_denied">
        <Card className="text-white bg-primary ">
          <CardBody>
            <div className="clearfix">
              <h4 className="pt-3">Please login First</h4>
              <p className="text-muted float-left">
                You don't have permission to access requested page. Please login first
              </p>
              <p className="text-muted float-left">
               Please login first
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
export default Profile;
