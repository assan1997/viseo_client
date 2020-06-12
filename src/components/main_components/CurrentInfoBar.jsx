import React from 'react';

const CurrentInfoBar = ({ currentUser }) => {
  return (
    <div
      className='row'
      style={{
        height: '100%',
        background: 'silver',
        zIndex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {currentUser !== undefined && currentUser.user !== undefined ? (
        <div>
          {currentUser.user.profil !== undefined && (
            <img
              className='img-fluid'
              src={`http://localhost:4000/ressources/${currentUser.user.profil}`}
            />
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4>{currentUser.user.login}</h4>
            <h5>{currentUser.user.email}</h5>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default CurrentInfoBar;
