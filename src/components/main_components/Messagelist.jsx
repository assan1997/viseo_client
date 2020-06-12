import React from 'react';
import Messages from './Messages';
const Messagelist = ({ messages, onCall, onAddContact, changeZone }) => {
  return (
    <div className='col-12 messageList h-100'>
      <Messages
        users={messages}
        onCall={onCall}
        onAddContact={onAddContact}
        changeZone={changeZone}
      />
    </div>
  );
};
export default Messagelist;
