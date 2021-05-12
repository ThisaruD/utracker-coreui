import React, { Component } from 'react';
import { Link, NavLink} from 'react-router-dom';
import {
  Badge,
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

import {  AppSidebarToggler } from '@coreui/react';
//import logo from '../../assets/img/brand/logo.svg'
//import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn:true,
      userId:'',
      user_role_id:''
    }

  }

  componentDidMount() {
    let user = localStorage.getItem("user_id");

    this.setState({
      user_role_id:localStorage.getItem('user_role_id')
    });

    if(user==undefined){
      this.setState({
        isLoggedIn:false
      });
    }
  }


  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    //const user = JSON.parse(localStorage.getItem('user'));



    if(this.state.isLoggedIn==true){


      if(this.state.user_role_id==1 || this.state.user_role_id==2){
        return (
          <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <h1 className="utracker_header"><span style={{fontSize:'40px'}}>Utracker</span>TRANSPORT MANAGEMENT SYSTEM</h1>

            <AppSidebarToggler className="d-md-down-none" display="lg" />

            <Nav className="d-md-down-none" navbar></Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-md-down-none">
                {/*<NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>*/}
              </NavItem>

              {/*<NavItem className="d-md-down-none">*/}
              {/*  <NavLink to="/login" className="nav-link">Login<i className=""></i></NavLink>*/}
              {/*</NavItem>*/}
              <NavItem>
                <p className="utracker_header">{"Welcome   "+localStorage.getItem('first_name')}</p>

              </NavItem>

              <NavItem>
                <NavLink to="/register" className="nav-link">Add User<i className=""></i></NavLink>
              </NavItem>



              <UncontrolledDropdown nav direction="down">
                <DropdownToggle nav>
                  <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>

                  <DropdownItem ><i className="fa fa-user" ></i><Link to='/profile'> View Profile</Link></DropdownItem>

                  <DropdownItem><i className="fa fa-wrench"></i><Link to='/profile-edit'> Edit Profile</Link> </DropdownItem>

                  {/*<DropdownItem ><i className="fa fa-wrench"></i><Link to='/setting'>Setting</Link></DropdownItem>*/}

                  <DropdownItem ><i className="fa fa-wrench"></i><Link to='/logout'>Logout</Link></DropdownItem>


                  <DropdownItem divider />

                  {/*<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>*/}
                </DropdownMenu>
              </UncontrolledDropdown>


            </Nav>

          </React.Fragment>
        );
      }else{
        return (
          <React.Fragment>
            <AppSidebarToggler className="d-lg-none" display="md" mobile />
            <h1 className="utracker_header"><span style={{fontSize:'40px'}}>Utracker</span>TRANSPORT MANAGEMENT SYSTEM</h1>

            <AppSidebarToggler className="d-md-down-none" display="lg" />

            <Nav className="d-md-down-none" navbar></Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className="d-md-down-none">
                {/*<NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>*/}
              </NavItem>

              {/*<NavItem className="d-md-down-none">*/}
              {/*  <NavLink to="/login" className="nav-link">Login<i className=""></i></NavLink>*/}
              {/*</NavItem>*/}

              {/*<NavItem>*/}
              {/*  <NavLink to="/register" className="nav-link">Add User<i className=""></i></NavLink>*/}
              {/*</NavItem>*/}

              <UncontrolledDropdown nav direction="down">
                <DropdownToggle nav>
                  <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>

                  <DropdownItem ><i className="fa fa-user" ></i><Link to='/profile'> View Profile</Link></DropdownItem>

                  <DropdownItem><i className="fa fa-wrench"></i><Link to='/profile-edit'> Edit Profile</Link> </DropdownItem>

                  {/*<DropdownItem ><i className="fa fa-wrench"></i><Link to='/setting'>Setting</Link></DropdownItem>*/}

                  <DropdownItem ><i className="fa fa-wrench"></i><Link to='/logout'>Logout</Link></DropdownItem>


                  <DropdownItem divider />

                  {/*<DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>*/}
                </DropdownMenu>
              </UncontrolledDropdown>


            </Nav>

          </React.Fragment>
        );
      }









    }else if(this.state.isLoggedIn==false){
      return (
        <React.Fragment>
          <AppSidebarToggler className="d-lg-none" display="md" mobile />
          <h1 className="utracker_header"><span style={{fontSize:'40px'}}>Utracker</span>TRANSPORT MANAGEMENT SYSTEM</h1>

          <AppSidebarToggler className="d-md-down-none" display="lg" />

          <Nav className="d-md-down-none" navbar></Nav>
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none">
              {/*<NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>*/}
            </NavItem>

            <NavItem className="d-md-down-none">
              <NavLink to="/login" className="nav-link">Login<i className=""></i></NavLink>
            </NavItem>
          </Nav>

        </React.Fragment>
      );

    }




  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
