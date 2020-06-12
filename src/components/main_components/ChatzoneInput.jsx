import React, { useState, useEffect, useRef } from "react";

const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  currentUser,
}) => {
  let sendBtnRef = useRef();
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) sendBtnRef.current.click();
  });
  return (
    <div className="row h-100">
      <div className="col-12 h-100">
        <div className="row h-100">
          <div
            className="col-10 contact_zone_input"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              style={{
                height: "65%",
                width: "100%",
                borderRadius: "100px",
                outline: "none",
                border: "none",
                paddingLeft: "15px",
                color: "gray",
              }}
              placeholder={"Taper votre message"}
              value={messageContent}
              onChange={manageMessageInput}
            />
          </div>
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
            <i
              className="fas fa-paper-plane fa-2x"
              style={{ color: "skyblue" }}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatzoneInput;
