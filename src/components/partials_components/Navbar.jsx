import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../../UserContext';
import io from 'socket.io-client';
import axios from 'axios';
const Navbar = ({
  display,
  onToggleProfilBar,
  inputRef,
  openFiles,
  setDisplay,
  emitSound,
  onToggleEmitSound,
}) => {
  const socket = io('http://localhost:4000');
  const context = useContext(userContext);
  const [user, setUser] = useState();
  const [file, setFile] = useState();
  const [profil, setProfil] = useState();
  useEffect(() => {
    setUser(sessionStorage.getItem('user'));
  });
  useEffect(() => {
    setProfil(sessionStorage.getItem('profil'));
  });
  const onFileAdded = (event) => {
    setFile(event.target.files);
  };
  const save = async () => {
    if (file !== undefined) {
      const formData = new FormData();
      formData.append('profil', file[0]);
      formData.append('user', user);
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      };
      let res = await axios.post(
        'http://localhost:4000/user/UpdateProfil',
        formData,
        config
      );
      if (res.data !== null) {
        setFile();
        sessionStorage.setItem('profil', res.data.profil);
        setProfil(sessionStorage.getItem('profil'));
      }
    }
  };
  if (file !== undefined) save();
  return (
    <div className='row'>
      <nav className='navbar ' style={{ zIndex: 1000, width: '100%' }}>
        <div className='navbar-brand'></div>
        <div className=''>
          <ul className='navbar nav'>
            <li className='nav-item'>
              {user && user !== 'null' ? (
                <div onClick={onToggleProfilBar} className='toggle-button'>
                  <i
                    style={{
                      color: 'gray',
                      cursor: 'pointer',
                    }}
                    className='fas fa-ellipsis-v fa-sm fa-fw '
                  ></i>
                </div>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
