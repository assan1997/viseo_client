import React from "react";
import UserItem from "./users/UserItem";
const Messages = ({
  messages,
  add,
  onAddContact,
  onCall,
  changeZone,
  onCurrentUser,
}) => {
  return (
    <div className="col-12 userItem">
      {messages.length !== 0 &&
        messages.map((message) => (
          <UserItem
            key={message._id}
            message={message}
            add={add}
            onAddContact={onAddContact}
            onCall={onCall}
            changeZone={changeZone}
            onCurrentUser={onCurrentUser}
          />
        ))}
    </div>
  );
};

export default Messages;
