import React from 'react';
import ChatItems from './ChatItems';

const Chatzonebody = ({ currentUser, onDeleteMessage }) => {
  const me = {
    login: sessionStorage.getItem('user'),
    profil: sessionStorage.getItem('profil'),
  };
  return (
    <div className='row h-100'>
      <div className='col-12' style={{ position: 'absolute' }}>
        {currentUser !== undefined &&
          currentUser.item !== undefined &&
          currentUser.item.body.map((message, index) => (
            <ChatItems
              key={message._id}
              message={message}
              user={currentUser.user}
              me={me}
              onDeleteMessage={onDeleteMessage}
            />
          ))}
      </div>
    </div>
  );
};
export default Chatzonebody;
