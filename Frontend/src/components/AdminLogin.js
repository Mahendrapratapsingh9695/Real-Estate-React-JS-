import React, { useState } from "react";
import Navbar from "./Navbar";

function AdminLoginHooks(props) {
  const [adminuserid, setAdminUserId] = useState("");
  const [adminpassword, setAdminPassword] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeAdminUserId = (e) => setAdminUserId(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${adminuserid}`);
    console.log(`PASS: ${adminpassword}`);

    if (adminuserid === "admin" && adminpassword === "pass") {
      sessionStorage.setItem("Key_Veriable", "ADMIN");
      setMessage("WELCOME ADMIN");
      props.history.push("/adminafterlogin");
    } else setMessage("INVALID UID OR PASSWORD");

    setAdminUserId("");
    setAdminPassword("");
  };

  return (
    <div>
      <Navbar />
      <br />
      <div class="wrapper">
        <div class="form-wrapper">
          <h3>ADMIN LOGIN</h3>
          <b style={{ color: "red" }}>{msg}</b>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={adminuserid}
              onChange={onChangeAdminUserId}
              placeholder="ADMIN USER ID"
              required
            />
            <br />
            <br />
            <input
              type="password"
              value={adminpassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              placeholder="ADMIN PASSWORD"
              required
            />
            <br />
            <br />
            <input
              type="submit"
              value="ADMIN LOGIN"
              className="btn btn-danger"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
export default AdminLoginHooks;
