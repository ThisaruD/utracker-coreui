import React from 'react';


const AddCompany = (props) =>{



  const user = JSON.parse(localStorage.getItem('user'));

  if(user.role_id==1) {
    return (
      <div className="animated fadeIn">
        <h1>add company here</h1>
      </div>
    );
  }else if(user.role_id==2){
    return (
      <div className="animated fadeIn">
        <h1>you haven't access</h1>
      </div>
    );
  }else{
    return (
      <div className="animated fadeIn">
        <h1>you haven't access</h1>
      </div>
    );
  }



}

export default AddCompany;
