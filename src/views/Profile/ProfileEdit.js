import React, {useState, useEffect} from "react";
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
  const [rePassword, setRepassword] = useState("");


  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState("");

  const [errors, setErrors] = useState({});

  //for user profile delete
  const [message,setMessage] = useState('');
  const [userDelete,setUserDelete] = useState(false);


  useEffect(() => {

    const user = localStorage.getItem("user_id");

    if (user == undefined) {

      console.log('hi');
      setIsLoggedIn(false);
    } else {


      axios.get('http://localhost:8000/api/getuserdetails/' + localStorage.getItem("user_id"), {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('token'),
        },
      })
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
  }, []);


  const validate = () => {
    let errors = {};
    let isValid = true;

    if (nic != undefined) {
      //should include regex for SL nic number
      var pattern = new RegExp(/^(?:19|20)?\d{2}(?:[0-35-8]\d\d(?<!(?:000|500|36[7-9]|3[7-9]\d|86[7-9]|8[7-9]\d)))\d{4}(?:[vVxX])$/);

    }

    if (!pattern.test(nic)) {
      isValid = false;
      errors["nic"] = "*Please enter valid NIC number";
    }

    if (contact_no != undefined) {
      var pattern = new RegExp(/^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/);
    }

    if (!pattern.test(contact_no)) {
      isValid = false;
      errors["contact_no"] = "*Please enter valid mobile number";
    }


    setErrors(errors);
    return isValid;

  }


  const submitFunc = (e) => {

    if (validate()) {
      if (password == rePassword) {
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

        axios.put('http://localhost:8000/api/updateuserdetails/' + localStorage.getItem("user_id"), profileDetails, {
          headers: {
            "Content_type": "application/json",
            Authorization: "Bearer" + localStorage.getItem("token")
          },
        })
          .then((res) => {
            console.log(res.data);
            alert(res.data.message1)
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        alert('password mismatch')
      }
    }
  }

  const deleteFunc = () => {

    if (window.confirm('Are you sure to remove your account from the Utracker System')) {
      const user = localStorage.getItem('user_id');

      if (!(password.length >= 8 && rePassword.length >= 8)) {
        alert('Password should contain at-least 8 characters ')
      } else if (!(password == rePassword)) {
        alert('Password mismatch')
      } else {
        axios.delete('http://localhost:8000/api/deleteuserdetails/' + user)
          .then((res) => {

            if(res.data.operation==='Fail'){
              alert(res.data.message);
            }else if(res.data.operation==='Success'){
              window.location.reload();
              localStorage.clear();
              props.history.push('/dashboard');
              window.location.reload();
            }

          })
          .catch((err) => {
            alert(err);
          })
      }
    }

  }


  const backToLogin = () => {
    props.history.push('/login');
  }


  if (isLoggedIn === true) {

    return (
      <div>
        <Card className="userProfile">
          <CardHeader className="userProfile_header">
            <strong>User Profile</strong> information
          </CardHeader>
          <CardBody className="userProfile_body">
            <Form action=""
              // onSubmit={submitFunc}
            >
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
                <div style={{color: "red"}}>{errors.nic}</div>
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
                    type="tel"
                    maxlength="10"
                    minlength="10"
                    placeholder="Contact Number"
                    value={contact_no}
                    onChange={(e) => setContact_no(e.target.value)}
                  />
                </InputGroup>
                <div style={{color: "red"}}>{errors.contact_no}</div>
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
                    id="re-enter-password"
                    name="password1"
                    placeholder="Re-Enter-Password"
                    value={rePassword}
                    required
                    onChange={(e) => setRepassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>


              <FormGroup className="form-actions">
                <Button
                  // type="submit"
                  size="sm"
                  color="primary"
                  className="profBut"
                  onClick={submitFunc}
                >
                  Save Details
                </Button>

                <Button
                  color="danger"
                  // type="submit"
                  size="sm"
                  color="danger"
                  className="userProfile_button"
                  onClick={deleteFunc}
                >Delete Profile</Button>

              </FormGroup>


            </Form>
          </CardBody>
        </Card>
      </div>
    );

  } else if (isLoggedIn === false) {
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

