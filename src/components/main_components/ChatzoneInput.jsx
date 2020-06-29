import React, { useState, useEffect, useRef } from "react";
import SendIcon from "@material-ui/icons/Send";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import Fab from "@material-ui/core/Fab";
import MicIcon from "@material-ui/icons/Mic";
import AttachmentIcon from "@material-ui/icons/Attachment";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  onDisplaySmiley,
}) => {
  let sendBtnRef = useRef(null);
  const [moreOptions, setMoreOptions] = useState(false);
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
            className="col-12 contact_zone_input h-100"
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgb(216, 214, 214)",
            }}
          >
            <div className="col-xl-8 offset-xl-2 h-100">
              <div className="row h-100">
                <div
                  className="col-8"
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
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
                      paddingRight: "50px",
                    }}
                    placeholder={"Taper un message"}
                    value={messageContent}
                    onChange={manageMessageInput}
                    onKeyPress={sendPressEnter}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: "30px",
                      color: "silver",
                    }}
                  >
                    <InsertEmoticonIcon
                      onClick={onDisplaySmiley}
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                </div>
                <div
                  className="col-4 col-lg-2 h-100"
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                  }}
                >
                  {messageContent.length !== 0 && (
                    <Fab
                      ref={sendBtnRef}
                      onClick={() => onSendMessage()}
                      style={{
                        color: "rgb(75, 103, 192)",
                        background: "transparent",
                        border: "none",
                      }}
                      size="small"
                    >
                      <SendIcon size="large" />
                    </Fab>
                  )}
                  {messageContent.length == 0 && (
                    <Fab
                      ref={sendBtnRef}
                      style={{
                        color: "rgb(75, 103, 192)",
                        background: "transparent",
                        border: "none",
                      }}
                      size="small"
                    >
                      <MicIcon size="large" />
                    </Fab>
                  )}
                  <Fab
                    style={{
                      color: "rgb(75, 103, 192)",
                      background: "transparent",
                      border: "none",
                    }}
                    size="small"
                    onClick={() => setMoreOptions(!moreOptions)}
                  >
                    <MoreHorizIcon size="large" />
                  </Fab>
                  <div
                    style={{
                      position: "absolute",
                      transition: "all ease-in-out .3s",
                      padding: "3px",
                      right: "0px",
                      bottom: `${moreOptions ? "70px" : "-150px"}`,
                      height: "150px",
                      backgroundColor: "silver",
                      borderRadius: "100px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Fab
                      ref={sendBtnRef}
                      style={{
                        color: "rgb(75, 103, 192)",
                        border: "none",
                      }}
                      size="small"
                    >
                      <AttachmentIcon />
                    </Fab>
                    <Fab
                      ref={sendBtnRef}
                      style={{
                        border: "none",
                        color: "rgb(75, 103, 192)",
                      }}
                      size="small"
                    >
                      <RecordVoiceOverIcon />
                    </Fab>
                  </div>
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
