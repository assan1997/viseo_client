import React from "react";
import img from "../../../img.jpg";
import AddIcon from "@material-ui/icons/Add";
const UserItem = ({ user, changeZone, onAddContact }) => {
  // let lastMessage = null;
  // if (user.item && user.item.body.length !== 0) {
  //   lastMessage = user.item.body[user.item.body.length - 1].content;
  // } else {
  //   lastMessage = `envoyer un nouveau message a ${
  //     user.login || user.user.login
  //   }`;
  // }
  return (
    <div className="row h-100" id={user && user._id} onClick={changeZone}>
      <div
        className="col-2 col-md-3  h-100 avatar"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "55px",
            height: "55px",
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
              <div className="col-12">{user && user.login}</div>
              {!onAddContact && (
                <div className="col-12">Envoyer un message</div>
              )}
            </div>
          </div>
          {!onAddContact && <div className="col-3">11:30</div>}
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
                style={{ borderRadius: "100px" }}
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
