import React from "react";
import ChatItems from "./ChatItems";

const Chatzonebody = ({ currentUser, onDeleteMessage }) => {
  const me = {
    login: sessionStorage.getItem("user"),
    profil: sessionStorage.getItem("profil"),
  };
  return (
    <div className="row h-100">
      <div
        className="col-12 col-xl-8 offset-xl-2 h-100"
        style={{ position: "absolute" }}
      >
        {currentUser.length !== 0 &&
          currentUser[0].emitter !== undefined &&
          currentUser[0].messageGroup.map((message, index) => (
            <ChatItems
              key={message._id}
              message={message}
              user={currentUser}
              me={me}
              onDeleteMessage={onDeleteMessage}
            />
          ))}
      </div>
    </div>
  );
};
export default Chatzonebody;
