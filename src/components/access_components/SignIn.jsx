import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import userContext from '../../UserContext';
const SignIn = () => {
  const context = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [type, setType] = useState('password');
  const [user, setUser] = useState();
  const [, setProfil] = useState();
  const [indicator, setIndicator] = useState('fas fa-eye-slash');
  useEffect(() => {
    context.updateUserData({ username: sessionStorage.getItem('user') });
  }, [user]);
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.email = email;
    data.password = password;
    setEmail('');
    setPassword('');
    axios({
      method: 'post',
      url: `http://${window.location.hostname}:4000/user/connect`,
      data: data,
    }).then((res) => {
      if (res.data.err !== undefined) {
        setLoginErr(true);
      } else {
        sessionStorage.setItem('user', res.data.login);
        sessionStorage.setItem('userId', res.data._id);
        sessionStorage.setItem('profil', res.data.profil);
        setProfil(sessionStorage.getItem('profil'));
        setUser(sessionStorage.getItem('user'));
        setRedirect(true);
      }
    });
  };
  const handleInput = () => {
    switch (type) {
      case 'password':
        setType('text');
        setIndicator('fas fa-eye');
        break;
      case 'text':
        setType('password');
        setIndicator('fas fa-eye-slash');
        break;
      default:
        break;
    }
  };
  if (redirect) {
    return <Redirect to='/home' />;
  }
  return (
    <div className='container'>
      <form
        className='sign text-center col-12 col-sm-12 col-md-6 col-lg-6 '
        style={formStyle}
      >
        <div style={fieldsetStyle}>
          <legend style={{ textAlign: 'justify', color: 'Black' }}>
            viseo
          </legend>
          <div className='form-group'>
            <input
              type='text'
              name='email'
              value={email}
              onChange={changeEmail}
              placeholder='Email'
              className=''
              style={inputStyle}
            />
          </div>
          <div className='form-group' style={{ position: 'relative' }}>
            <input
              type={type}
              value={password}
              onChange={changePassword}
              placeholder='Password'
              className=''
              style={inputStyle}
            />
            <i
              onClick={handleInput}
              style={viewPassWordStyle}
              className={`${indicator}`}
            ></i>
          </div>
          {loginErr && (
            <div className='form-group alert alert-danger'>
              <h6>L'email ou le mot passe de correspond pas</h6>
            </div>
          )}
          <div className='form-group'>
            <button type='submit' onClick={onSubmit} className='btn btn-info'>
              Login
            </button>
          </div>
          <Link to='/sign-up' className='nav-link'>
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};
const formStyle = {
  height: '400px',
  margin: '0 auto',
  marginTop: '10%',
};
const inputStyle = {
  width: '100%',
  outline: 'none',
  border: 'none',
  borderBottom: '0.01em solid silver',
  lineHeight: '3em',
  paddingRight: '50px',
};

const fieldsetStyle = {
  height: '100%',
  borderRadius: '5px',
  width: '100%',
  padding: '10%',
};
const viewPassWordStyle = {
  position: 'absolute',
  top: '30%',
  right: '15px',
};
export default SignIn;
