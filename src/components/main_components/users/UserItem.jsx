import React from 'react';
const UserItem = ({ user, changeZone, onAddContact }) => {
  let lastMessage = null;
  if (user.item && user.item.body.length !== 0) {
    lastMessage = user.item.body[user.item.body.length - 1].content;
  } else {
    lastMessage = `envoyer un nouveau message a ${
      user.login || user.user.login
    }`;
  }
  return (
    <div
      className='col-12 user_zone'
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        outline: 'none',
      }}
      onClick={changeZone}
      id={
        user !== undefined || user.item !== undefined
          ? user._id || user.user._id
          : ''
      }
    >
      <div className='row'>
        <div className='col-12 '>
          <div className='row'>
            <div className=' col-2  col-md-2'>
              <span className='chatZoneImg'>
                <img
                  className='rounded-circle'
                  src={`${
                    user.profil !== undefined
                      ? `http://localhost:4000/ressources/${user.profil}`
                      : user.user !== undefined
                      ? `http://localhost:4000/ressources/${user.user.profil}`
                      : ''
                  }`}
                  alt=''
                />
              </span>
            </div>{' '}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
              className='col-sm-4 col-md-6  col-lg-4 col-5 '
            >
              <h5 style={{ color: 'gray', fontSize: '0.9em' }}>
                {user.login || user.user.login}
              </h5>
              <p style={{ fontSize: '0.7em', color: 'gray' }}></p>
            </div>
            {user.item !== undefined && (
              <div
                className='col-5 col-md-6'
                style={{
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '0.8em',
                    color: 'gray',
                    position: 'relative',
                    top: '25%',
                  }}
                >
                  {lastMessage !== null
                    ? lastMessage.length > 25
                      ? `${lastMessage.split('').splice(0, 25).join('')} ...`
                      : lastMessage
                    : ''}
                </p>
              </div>
            )}
            {onAddContact !== null && (
              <div
                className='col-md-5 col-lg-4 col-5'
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <button
                  className='btn btn-info btn-sm my-1'
                  onClick={onAddContact}
                  id={`${user._id}`}
                  style={{ color: '#000' }}
                >
                  <i className=' fas fa-plus'></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default UserItem;
