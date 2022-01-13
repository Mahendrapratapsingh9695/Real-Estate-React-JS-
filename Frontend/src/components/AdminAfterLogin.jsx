import React from 'react'
import { Redirect } from "react-router-dom";
import Main from './Main';

function AdminAfterLogin() {
  let authuser = sessionStorage.getItem('Key_Veriable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/adminlogin" />)
  }
  else {
    return (
      <div>
          <Main />
      </div>
    )
  }
}

export default AdminAfterLogin
