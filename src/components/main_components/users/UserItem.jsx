import React from "react";
import img from "../../../img.jpg";
import AddIcon from "@material-ui/icons/Add";
import moment from "moment";
const UserItem = ({ user, message, changeZone, onAddContact }) => {
  let lastMessage = null,
    lastContent,
    lastContentTime;
  if (message !== undefined) {
    lastMessage = message.messageGroup[message.messageGroup.length - 1];
    lastContent = lastMessage.body[lastMessage.body.length - 1].content;
    lastContentTime = lastMessage.body[lastMessage.body.length - 1].time;
  } else {
    lastContent = "Nouvelle discussion";
  }
  return (
    <div
      className="row h-100 useritem-color useritem-margin"
      id={
        message && message.emitter !== undefined
          ? message.emitter._id === sessionStorage.getItem("userId")
            ? message.receiver._id
            : message.emitter._id
          : user && user._id
      }
      onClick={changeZone}
      style={{
        cursor: "pointer",
      }}
    >
      <div
        className="col-1  col-md-3 h-100 avatar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "45px",
            height: "45px",
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "100px",
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <div className="col-10 col-md-9  h-100 main-text">
        <div className="row h-100">
          <div className="col-9 h-100">
            <div className="row h-100">
              <div
                className="col-12"
                style={{
                  display: "flex",
                  alignItems: `${!message && "center"}`,
                  fontSize: "1em",
                }}
              >
                {message && message.emitter !== undefined
                  ? message.emitter._id === sessionStorage.getItem("userId")
                    ? message.receiver.login
                    : message.emitter.login
                  : user && user.login}
              </div>
              {message && (
                <div
                  className="col-12"
                  style={{ color: "gray", fontSize: "1.1em" }}
                >
                  {lastContent.length <= 15
                    ? lastContent
                    : lastContent.split("").splice(0, 10).join("") + "..."}
                </div>
              )}
            </div>
          </div>
          {message && (
            <div
              className="col-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "0.8em",
                color: "gray",
              }}
            >
              {message &&
              moment(lastContentTime).format("Do MMM  YYYY ") ===
                moment(new Date()).format("Do MMM  YYYY ")
                ? moment(lastContentTime).format("LT")
                : moment(lastContentTime).format("L")}
            </div>
          )}

          {onAddContact && (
            <div
              id={user && user._id}
              className="col-3 "
              onClick={onAddContact}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                className="btn btn-ligth"
                style={{ borderRadius: "100px", padding: "10px" }}
              >
                <AddIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default UserItem;
