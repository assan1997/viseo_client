import React, { useState, useContext } from "react";
import axios from "axios";
import FormChecker from "./small/FormChecker";
import SignUpButton from "./small/SignUpButton";
import Env from "../../configContext";
const SignUp = () => {
  const EnvContext = useContext(Env);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState(false);
  const [allFieldsOk, setAllFieldsOk] = useState(false);
  const [accountSatus, setAccountStatus] = useState({});
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const verifyInput = () => {
    confirmPassword.length > 0 &&
    password.length > 0 &&
    confirmPassword === password
      ? setCheckPassword(true)
      : setCheckPassword(false);
  };
  const verifyAllFields = () => {
    username.length > 0 && email.length > 0
      ? setAllFieldsOk(true)
      : setAllFieldsOk(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.login = username;
    data.email = email;
    data.password = password;
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    axios({
      method: "post",
      url: `${EnvContext.local}/user/create/`,
      data: data,
    }).then((res) => {
      console.log(res);
      setAccountStatus(res.data);
    });
  };
  return (
    <div className="container">
      <form
        onSubmit={onSubmit}
        className="text-center sign col-12 col-md-5"
        style={formStyle}
      >
        <div style={divStyle}>
          <legend style={{ textAlign: "justify" }}> viseo</legend>
          <div className="row">
            {accountSatus.err || accountSatus.success ? (
              <div className="form-group col-12">
                {accountSatus.err !== undefined ? (
                  <div className="alert alert-danger">{accountSatus.err}</div>
                ) : (
                  <div className="alert alert-success">
                    {accountSatus.success}
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
            <div className="form-group col-md-6">
              <input
                type="text"
                value={username}
                onChange={changeUsername}
                onKeyUp={verifyAllFields}
                placeholder="Username"
                style={inputStyle}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                value={email}
                onChange={changeEmail}
                onKeyUp={verifyAllFields}
                placeholder="Email"
                style={inputStyle}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                value={password}
                onChange={changePassword}
                onKeyUp={verifyInput}
                placeholder="Password"
                style={inputStyle}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="password"
                value={confirmPassword}
                onChange={changeConfPassword}
                onKeyUp={verifyInput}
                placeholder="Confirm your password"
                style={inputStyle}
              />
            </div>
            <FormChecker
              checkPassword={checkPassword}
              allFieldsOk={allFieldsOk}
            />
            <SignUpButton
              allFieldsOk={allFieldsOk}
              checkPassword={checkPassword}
            />
          </div>
        </div>
      </form>
    </div>
  );
};
const inputStyle = {
  width: "100%",
  outline: "none",
  border: "none",
  borderBottom: "0.2px solid silver",
  lineHeight: "3em",
};
const formStyle = {
  height: "400px",
  margin: "0 auto",
  marginTop: "10%",
};
const divStyle = {
  height: "100%",
  borderRadius: "5px",
  width: "100%",
  paddingTop: "10px",
};
export default SignUp;
