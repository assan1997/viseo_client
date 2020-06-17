import React, { useState, useEffect, useRef } from "react";
import SendIcon from "@material-ui/icons/Send";
const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  currentUser,
}) => {
  let sendBtnRef = useRef();
  window.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) sendBtnRef.current.click();
  });
  return (
    <div className="row h-100">
      <div className="col-12 h-100">
        <div className="row h-100">
          <div
            className="col-12 contact_zone_input"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
              placeholder={"Taper votre message"}
              value={messageContent}
              onChange={manageMessageInput}
              className="col-xl-8 offset-xl-2"
            />
            <button
              ref={sendBtnRef}
              onClick={onSendMessage}
              className="col-2 col-lg-1 contact_zone_button"
              style={{
                height: "100%",
                borderBottomRightRadius: "3px",
                background: "transparent",
                border: "none",
              }}
              disabled={
                currentUser !== undefined &&
                messageContent !== "" &&
                messageContent !== undefined
                  ? false
                  : true
              }
            >
              {" "}
              <SendIcon style={{ color: "skyblue" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatzoneInput;
