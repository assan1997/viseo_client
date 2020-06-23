import React, { useState, useEffect, useRef } from "react";
import SendIcon from "@material-ui/icons/Send";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import Fab from "@material-ui/core/Fab";
import MicIcon from "@material-ui/icons/Mic";
const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  currentUser,
}) => {
  let sendBtnRef = useRef(null);
  const sendPressEnter = (e) => {
    let key = e.charCode || e.keyCode || 0;
    if (key === 13) {
      onSendMessage();
    }
  };
  return (
    <div className="row h-100">
      <div className="col-12 h-100">
        <div className="row h-100">
          <div
            className="col-12 contact_zone_input"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "whitesmoke",
            }}
          >
            <div className="col-xl-8 offset-xl-2">
              <div className="row h-100">
                <input
                  style={{
                    width: "100%",
                    borderRadius: "100px",
                    outline: "none",
                    border: "none",
                    color: "gray",
                    height: "50px",
                    paddingLeft: "20px",
                  }}
                  placeholder={"Taper un message"}
                  value={messageContent}
                  onChange={manageMessageInput}
                  className="col-9"
                  onKeyPress={sendPressEnter}
                />
                <div
                  className="col-3 h-100"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    ref={sendBtnRef}
                    onClick={() => onSendMessage()}
                    style={{
                      color: "silver",
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <SendIcon size="large" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatzoneInput;
