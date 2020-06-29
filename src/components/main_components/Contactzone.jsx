import React from "react";
import Users from "./users/Users";
import Messagelist from "./Messagelist";
import ContactsIcon from "@material-ui/icons/Contacts";
import ChatIcon from "@material-ui/icons/Chat";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import Fab from "@material-ui/core/Fab";
import CallIcon from "@material-ui/icons/Call";
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
  onToggleProfilBar,
}) => {
  return (
    <div
      className={`contactZone col-xs-12 col-md-4 col-xl-3 ${
        toggleZone ? "d-none" : ""
      } d-md-block`}
    >
      <div className="row h-100 " style={{ position: "relative" }}>
        <div className="col-2 contact_zone_options">
          <Fab size="small" className="items">
            {" "}
            <ContactsIcon
              onClick={onDisplayContact}
              style={{ color: "rgb(75, 103, 192)" }}
            />
          </Fab>
          <Fab size="small" className="items">
            {" "}
            <ChatIcon
              onClick={onDisplayMessage}
              style={{ color: "rgb(75, 103, 192)" }}
            />
          </Fab>
          <Fab size="small" className="items">
            {" "}
            <CallIcon
              onClick={onDisplayMessage}
              style={{ color: "rgb(75, 103, 192)" }}
            />
          </Fab>
        </div>
        <div className="col-10">
          <div className="row h-100">
            <div
              className="col-12 "
              style={{
                height: "20%",
                width: "100%",
              }}
            >
              <div className="row h-100">
                <nav
                  className="col-12 navbar"
                  style={{
                    height: "50%",
                    backgroundColor: "whitesmoke",
                  }}
                >
                  <div
                    className="navbar-brand"
                    style={{ position: "relative" }}
                  >
                    <span className="chatZoneImg">
                      {sessionStorage.getItem("profil") !== "undefined" && (
                        <img
                          src={`${
                            sessionStorage.getItem("profil") !== "undefined"
                              ? `http://localhost:4001/ressources/${sessionStorage.getItem(
                                  "profil"
                                )}`
                              : ""
                          }`}
                          alt=""
                        />
                      )}
                    </span>
                    &nbsp;
                    <span
                      style={{
                        position: "absolute",
                        top: "25%",
                      }}
                    >
                      {sessionStorage.getItem("user")}
                    </span>
                  </div>
                  <div>
                    <ul className="navbar nav">
                      <li className="nav-item">
                        <div
                          onClick={onToggleProfilBar}
                          className="toggle-button "
                        >
                          <i
                            style={{
                              color: "gray",
                              cursor: "pointer",
                            }}
                            className="fas fa-ellipsis-v fa-sm fa-fw "
                          ></i>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
                <hr />
                <div
                  style={{
                    height: "40%",
                    width: "100%",
                  }}
                >
                  <div
                    className={`col-12 h-100 finder_zone ${
                      inputFocus ? "block" : "none"
                    }`}
                  >
                    <div className="row h-100">
                      <div className="col-2 item" onClick={onToggleFocus}>
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
                    className={`col-12 h-100  findzone-placeholder ${
                      inputFocus ? "none" : "block"
                    }`}
                    onClick={onToggleFocus}
                  >
                    <div className="col-2 item">
                      <SearchOutlinedIcon style={{ fontSize: "2em" }} />
                    </div>
                    <div className="col-10 item">Rechercher un utilisateur</div>
                  </div>
                </div>
              </div>
            </div>

            {/*  <div
              className='col-12 finder_zone_result_message'
              style={{
                display: `${usersFilter.length !== 0 ? 'block' : 'none'}`,
              }}
            >
              {usersFilter.length === 0 ? (
                ''
              ) : (
                <p className='row' style={{}}>
                  {contactExist === null
                    ? usersFilter.length === 1
                      ? `${usersFilter.length} utilisateur trouvé`
                      : `${usersFilter.length} utilisateurs trouvés`
                    : contactExist}
                </p>
              )}
            </div> */}

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
                    {messages.length !== 0 ? (
                      <Messagelist
                        messages={messages}
                        onCall={call}
                        onAddContact={null}
                        changeZone={changeZone}
                      />
                    ) : (
                      <div className="zone-status-alert">
                        <h6>Aucune converssation</h6>
                      </div>
                    )}
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
export default Contactzone;
