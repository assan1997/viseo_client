import React from "react";
import "./UserItem";
import UserItem from "./UserItem";
const Users = ({
  users,
  add,
  onAddContact,
  onCall,
  changeZone,
  onCurrentUser,
}) => {
  return (
    <div
      className="col-12"
      style={{ height: "70px", backgroundColor: "whitesmoke" }}
    >
      {users.map((user) => (
        <UserItem
          key={user._id}
          user={user}
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
export default Users;
