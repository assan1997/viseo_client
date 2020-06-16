import React from "react";
import Messages from "./Messages";
const Messagelist = ({ messages, onCall, onAddContact, changeZone }) => {
  return (
    <div className="col-12 ">
      {
        <div className="row">
          <Messages
            messages={messages}
            onCall={onCall}
            onAddContact={onAddContact}
            changeZone={changeZone}
          />
        </div>
      }
    </div>
  );
};
export default Messagelist;
