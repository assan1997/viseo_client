import React from 'react';

const ChatzoneHeader = ({ changeZone, currentUser, onCall }) => {
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
            {currentUser !== undefined && currentUser.user !== undefined && (
              <img
                src={`${
                  currentUser.user.profil !== undefined
                    ? `http://localhost:4000/ressources/${currentUser.user.profil}`
                    : ''
                }`}
                alt=''
              />
            )}
          </span>
          &nbsp;
          <span className='chatZoneText'>
            {currentUser !== undefined
              ? currentUser.user
                ? currentUser.user.login
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
                  (currentUser !== undefined && currentUser._id) ||
                  (currentUser.user !== undefined && currentUser.user._id)
                }`}
                onClick={onCall}
                disabled={
                  currentUser.user !== undefined ||
                  currentUser._id !== undefined
                    ? false
                    : true
                }
              >
                <i className='fas fa-video'></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default ChatzoneHeader;
