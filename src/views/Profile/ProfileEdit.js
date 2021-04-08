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
  InputGroup, Row, Col,
} from "reactstrap";
import axios from "axios";


const ProfileEdit = (props) => {

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [userId,setUserId] = useState("");



  useEffect(()=>{

    const user = localStorage.getItem("user_id");

    if(user==undefined){

      console.log('hi');
      setIsLoggedIn(false);
    }else {


      axios.get('http://localhost:8000/api/getuserdetails/' +localStorage.getItem("user_id"))
        .then((res) => {
          console.log(res.data);
          setFirst_name(res.data.user[0].first_name);
          setLast_name(res.data.user[0].last_name);
          setEmail(res.data.user[0].email);
          setNic(res.data.user[0].nic);
          setContact_no(res.data.user[0].contact_no);
          //setPassword(res.data.user[0].password)

        })
        .catch((err) => {
          console.log(err);
        })
    }
  },[]);


  const submitFunc = (e) => {
    e.preventDefault();
    const profileDetails = {
      first_name,
      last_name,
      email,
      nic,
      contact_no,
      password
    };
    console.log(profileDetails);

axios.put('http://localhost:8000/api/updateuserdetails/'+localStorage.getItem("user_id"),profileDetails,{
  headers:{
    "Content_type":"application/json",
    Authorization:"Bearer"+ localStorage.getItem("token")
  },
})
  .then((res)=>{
    console.log(res.data);
    alert(res.data.message1)
  })
  .catch((err)=>{
    console.log(err);
  })






  }

  const deleteFunc = () =>{

   axios.delete('http://localhost:8000/api/deleteuserdetails',{params:localStorage.getItem('user_id')})
     .then((res)=>{
       console.log(res.data.message1);
     })
     .catch((err)=>{
       console.log(err);
     })


  }


  const backToLogin = () =>{props.history.push('/login');}

    // fetch('',{
    //   method:'DELETE',
    //   headers:{"Content-Type":"application/json"},
    //   body:JSON.stringify('data')
    // }).then((res)=>{
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.log(err);
    // })


if(isLoggedIn===true){
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
                  required
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
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
                  required
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
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
                  required
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
                  required
                  type="text"
                  id="nicNumber"
                  name="nicNumber"
                  placeholder="NIC Number"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
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
                  required
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  // pattern="07[1,2,5,6,7,8][0-9]+"
                  // type="tel"
                  maxlength="10"
                  minlength="10"
                  placeholder="Contact Number"
                  value={contact_no}
                  onChange={(e) => setContact_no(e.target.value)}
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
                  required
                  type="password"
                  id="password1"
                  name="password1"
                  placeholder="Password"
                  value={password}
                  required
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
                onClick={submitFunc}
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
export default ProfileEdit;

