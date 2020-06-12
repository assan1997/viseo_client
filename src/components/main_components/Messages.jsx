import React from 'react';
import UserItem from './users/UserItem';
const Messages = ({
  users,
  add,
  onAddContact,
  onCall,
  changeZone,
  onCurrentUser,
}) => {
  return (
    <div className='col-12'>
      <div className='row'>
        {users.map((user) => (
          <UserItem
            key={user.item._id}
            user={user}
            add={add}
            onAddContact={onAddContact}
            onCall={onCall}
            changeZone={changeZone}
            onCurrentUser={onCurrentUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Messages;
