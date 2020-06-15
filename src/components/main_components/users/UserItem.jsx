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
    <div className='row h-100'>
      <div
        className='col-2 h-100 avatar'
        style={{ backgroundColor: 'orange' }}
      ></div>
      <div
        className='col-10 h-100 main-text'
        style={{ backgroundColor: 'blue' }}
      >
        <div className='row h-100'>
          <div className='col-9 h-100' style={{ backgroundColor: 'blue' }}>
            <div className='row h-100'>
              <div className='col-12'></div>
              <div className='col-12'></div>
            </div>
          </div>
          <div className='col-3' style={{ backgroundColor: 'purple' }}></div>
        </div>
      </div>
      <div className='plus'></div>
    </div>
  );
};
export default UserItem;
