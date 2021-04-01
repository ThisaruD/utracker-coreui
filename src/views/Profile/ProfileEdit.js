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
} from "reactstrap";
import axios from "axios";


const ProfileEdit = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nicNumber, setNicNumber] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const [user_id,setUser_id] =useState('1');

  useEffect(()=>{
    axios.get('http://localhost:8000/api/getuserdetails/'+user_id)
      .then((res)=>{
        console.log(res.data);
        setFirstName(res.data.user[0].first_name);
        setLastName(res.data.user[0].last_name);
        setEmail(res.data.user[0].email);
        setNicNumber(res.data.user[0].nic);
        setContactNumber(res.data.user[0].contact_no);

      })
      .catch((err)=>{
        console.log(err);
      })
  },[]);


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






  }

  const deleteFunc = () =>{

   axios.delete('')
     .then((res)=>{
       console.log(res.data);
     })
     .catch((err)=>{
       console.log(err);
     })


  }



    // fetch('',{
    //   method:'DELETE',
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify('data')
    // }).then((res)=>{
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // })







  return (
    <div>
      <Card className="NewClass">
        <CardHeader className="NewClass_h">
          <strong>User Profile</strong> information
        </CardHeader>
        <CardBody className="NewBody">
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
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
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
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setNicNumber(e.target.value)}
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
                  onChange={(e) => setContactNumber(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup className="form-actions">


                  <Button
                    type="submit"
                    size="sm"
                    color="success"
                    className="profBut"
                  >
                    Save Details
                  </Button>


              <Button
                color="danger"
                type="submit"
                size="sm"
                color="danger"
                className="profBut"
                onClick={deleteFunc}
              >Delete Profile</Button>









            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </div>
  );

}
export default ProfileEdit;

