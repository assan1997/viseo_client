import React, { useState } from "react";
import moment from "moment";
const ChatItems = ({ message, onDeleteMessage }) => {
  const [displayOptions, setDisplayOptions] = useState(false);
  const moreOptions = () => {
    setDisplayOptions(!displayOptions);
  };
  return (
    <div className='row'>
      {displayOptions && (
        <div className='overlay' onClick={() => setDisplayOptions(false)}></div>
      )}
      <div
        className='col-12'
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h6 className='chatDate'>
          {moment(message.date).format("Do MMM  YYYY ")}
        </h6>
      </div>
      <br />

      <div className='col-12'>
        {message.body.map((m) => (
          <div
            className={`${
              m.sendBy === sessionStorage.getItem("userId") ? "offset-3 " : ""
            } col-9`}
            style={{ marginBottom: "20px" }}
            key={m._id}
          >
            <div className='row'>
              <div
                className={`${
                  m.sendBy === sessionStorage.getItem("userId")
                    ? "col-12 "
                    : "col-2"
                } `}
                style={{
                  textAlign: `${
                    m.sendBy !== sessionStorage.getItem("userId") ? "right" : ""
                  }`,
                }}
              >
                {m.sendBy === sessionStorage.getItem("userId") ? (
                  <div className='col-auto chatitem-color-home chatitem-home'>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    >
                      <i
                        onClick={moreOptions}
                        style={{
                          color: "gray",
                          cursor: "pointer",
                          fontSize: "1em",
                          zIndex: 10000,
                        }}
                        className='fas fa-ellipsis-v fa-sm fa-fw '
                      ></i>
                      <div
                        className={`more_options left ${
                          displayOptions ? "is_visible" : "is_hidden"
                        }`}
                      >
                        <p>Repondre</p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={onDeleteMessage}
                          id={message._id}
                        >
                          Supprimer
                        </p>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "1em",
                        display: "inline-block",
                        marginBottom: "15px",
                        color: "gray",
                      }}
                    >
                      {m.content}
                    </span>
                    <small
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        fontSize: "0.9em",
                        color: "gray",
                      }}
                    >
                      {moment(m.time).format("LT")}
                    </small>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={`${
                  m.sendBy === sessionStorage.getItem("userId")
                    ? "col-2"
                    : "col-12 "
                } `}
              >
                {m.sendBy === sessionStorage.getItem("userId") ? (
                  ""
                ) : (
                  <div className='col-auto chatitem-color-away chatitem-away'>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    >
                      <i
                        onClick={moreOptions}
                        style={{
                          color: "gray",
                          cursor: "pointer",
                          fontSize: "1em",
                          zIndex: 10000,
                        }}
                        className='fas fa-ellipsis-v fa-sm fa-fw '
                      ></i>
                      <div
                        className={`more_options ${
                          displayOptions ? "is_visible" : "is_hidden"
                        }`}
                      >
                        <p>Repondre</p>
                        <p
                          style={{ cursor: "pointer" }}
                          onClick={onDeleteMessage}
                          id={message._id}
                        >
                          Supprimer
                        </p>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "1em",
                        display: "inline-block",
                        marginBottom: "15px",
                        color: "gray",
                      }}
                    >
                      {m.content}
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        fontSize: "0.8em",
                        color: "gray",
                      }}
                    >
                      {moment(m.time).format("LT")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ChatItems;
