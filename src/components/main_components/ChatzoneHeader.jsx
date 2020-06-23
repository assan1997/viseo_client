import React from 'react';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
const ChatzoneHeader = ({
  changeZone,
  currentUser,
  onCall,
  onToggleProfilBar,
}) => {
  let user;
  if (currentUser.length !== 0) {
    if (currentUser[0].emitter && currentUser[0].receiver) {
      user = { ...currentUser[0] };
      user.emitter._id === sessionStorage.getItem('userId')
        ? (user.emitter = null)
        : (user.receiver = null);
    }
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
            {currentUser.length !== 0
              ? currentUser[0].emitter !== undefined
                ? user.emitter !== null
                  ? user.emitter.login
                  : user.receiver.login
                : currentUser[0].login
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
                  currentUser.length !== 0
                    ? currentUser[0].emitter !== undefined
                      ? user.emitter !== null
                        ? user.emitter._id
                        : user.receiver._id
                      : currentUser[0]._id
                    : ''
                }`}
                onClick={onCall}
              >
                <VideocamOutlinedIcon />
              </button>
            </li>
            <li className='nav-item'>
              {' '}
              <h6 className='nav-link'>{sessionStorage.getItem('user')}</h6>
            </li>
            &nbsp;
            <li className='nav-item'>
              <div onClick={onToggleProfilBar} className='toggle-button '>
                <i
                  style={{
                    color: 'gray',
                    cursor: 'pointer',
                  }}
                  className='fas fa-ellipsis-v fa-sm fa-fw '
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default ChatzoneHeader;
