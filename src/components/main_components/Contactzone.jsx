import React from "react";
import Users from "./users/Users";
import Messagelist from "./Messagelist";
import ContactsIcon from "@material-ui/icons/Contacts";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
const Contactzone = ({
  usersFilter,
  findUser,
  contactList,
  addContact,
  call,
  changeZone,
  contactExist,
  toggleZone,
  onDisplayMessage,
  onDisplayContact,
  displayMessage,
  messages,
  inputFocus,
  onToggleFocus,
  searchInputRef,
}) => {
  return (
    <div
      className={`contactZone col-xs-12 col-md-4 col-xl-2 ${
        toggleZone ? "d-none" : ""
      } d-md-block`}
    >
      <div className="row h-100 " style={{ position: "relative" }}>
        <div className="col-12 " style={{ height: "10%" }}>
          <div className="row h-100">
            <div
              className={`col-12 finder_zone ${inputFocus ? "block" : "none"}`}
            >
              <div className="row h-100">
                <div className="col-1 item" onClick={onToggleFocus}>
                  <ArrowBackOutlinedIcon />
                </div>
                <div className="col-10 item">
                  <input
                    className="form-control"
                    onKeyUp={findUser}
                    type="text"
                    name=""
                    placeholder=""
                    autoFocus
                    ref={searchInputRef}
                  />
                </div>
              </div>
            </div>
            <div
              className={`col-12 searchplaceholder' ${
                inputFocus ? "none" : "block"
              }`}
              onClick={onToggleFocus}
            >
              <div className="row h-100 searchplaceholder-background">
                <div className="col-2 item">
                  <SearchOutlinedIcon style={{ fontSize: "2em" }} />
                </div>
                <div className="col-8 item">Rechercher un utilisateur</div>
                <div className="col-2 item"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 finder_zone_result_message"
          style={{
            display: `${usersFilter.length !== 0 ? "block" : "none"}`,
          }}
        >
          {usersFilter.length === 0 ? (
            ""
          ) : (
            <p className="row" style={{}}>
              {contactExist === null
                ? usersFilter.length === 1
                  ? `${usersFilter.length} utilisateur trouvé`
                  : `${usersFilter.length} utilisateurs trouvés`
                : contactExist}
            </p>
          )}
        </div>
        <div className="col-12 contact_zone_options">
          <button
            onClick={onDisplayContact}
            className={`button  col-5  ${
              displayMessage ? "" : "contact_zone_options_1"
            }`}
          >
            <ContactsIcon style={{ color: "skyblue" }} />
            <span style={{ fontSize: "0.8em" }}>Contacts</span>
          </button>
          <button
            onClick={onDisplayMessage}
            className={`button offset-2 col-5  ${
              displayMessage ? "contact_zone_options_2" : ""
            }`}
          >
            <ChatIcon style={{ color: "skyblue" }} />
            <span style={{ fontSize: "0.8em" }}>Messages</span>
          </button>
        </div>
        <div className="col-12  contactList ">
          <div className="row">
            <div
              className="col-12"
              style={{
                position: "absolute",
                left: `${displayMessage ? "-155%" : "0px"}`,
                transition: "all ease-in-out .5s",
              }}
            >
              <div className="row">
                {usersFilter.length !== 0 && (
                  <Users
                    users={usersFilter}
                    add={true}
                    onAddContact={addContact}
                    onCall={null}
                  />
                )}
                {usersFilter.length === 0 && contactList.length !== 0 && (
                  <Users
                    users={contactList}
                    add={false}
                    onCall={call}
                    changeZone={changeZone}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12"
              style={{
                position: "absolute",
                left: `${displayMessage ? "0px" : "155%"}`,
                transition: "all ease-in-out .5s",
              }}
            >
              <div className="row">
                <Messagelist
                  messages={messages}
                  onCall={call}
                  onAddContact={null}
                  changeZone={changeZone}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactzone;
