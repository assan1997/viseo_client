import React from 'react';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
const ChatzoneHeader = ({ changeZone, currentUser, onCall }) => {
  let user;
  if (currentUser.emitter && currentUser.receiver) {
    user = { ...currentUser };
    user.emitter._id === sessionStorage.getItem('userId')
      ? (user.emitter = null)
      : (user.receiver = null);
  }
  return (
    <div className='row h-100'>
      <nav
        style={{ width: '100%', color: 'black', zIndex: 10 }}
        className='navbar'
      >
        <div style={{ color: 'black' }} className='navbar-brand'>
          <button className='d-md-none btn back-arrow' onClick={changeZone}>
            <i style={{ color: 'black' }} className='fas fa-arrow-left'></i>
          </button>
          <span className='chatZoneImg'>
            {currentUser !== undefined && (
              <img
                src={`${
                  currentUser.profil !== undefined
                    ? `http://localhost:4000/ressources/${currentUser.profil}`
                    : ''
                }`}
                alt=''
              />
            )}
          </span>
          &nbsp;
          <span className='chatZoneText'>
            {currentUser !== undefined
              ? currentUser.emitter !== undefined
                ? user.emitter !== null
                  ? user.emitter.login
                  : user.receiver.login
                : currentUser.login
              : ''}
          </span>
        </div>
        <div>
          <ul className='navbar nav'>
            <li className='nav-item'>
              <button
                className='btn nav-link'
                style={{
                  background: 'transparent',
                  borderRight: '1px solid silver',
                  borderRadius: 0,
                }}
                disabled
              >
                <i className='fas fa-phone'></i>
              </button>
            </li>
            <li className='nav-item'>
              <button
                style={{
                  background: 'transparent',
                  borderRadius: 0,
                  border: 'none',
                  outline: 'none',
                }}
                className='nav-link'
                id={`${
                  currentUser.emitter !== undefined
                    ? (user.emitter !== null && user.emitter._id) ||
                      (user.receiver !== null && user.receiver._id)
                    : currentUser._id
                }`}
                onClick={onCall}
                disabled={
                  currentUser.user !== undefined ||
                  currentUser._id !== undefined
                    ? false
                    : true
                }
              >
                <VideocamOutlinedIcon />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default ChatzoneHeader;
