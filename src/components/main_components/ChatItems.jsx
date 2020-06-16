import React, { Fragment, useState } from 'react';
import Moment from 'react-moment';
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

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Moment fromNow>{message.date}</Moment>
      </div>
      {/*  <div
        className={`${message.msg_type === 'send' ? 'offset-3 ' : ''} col-9`}
        style={{ marginBottom: '20px' }}
      >
        <div className='row'>
          <div
            className={`${message.msg_type === 'send' ? 'col-12 ' : 'col-2'} `}
            style={{
              textAlign: `${message.msg_type !== 'send' ? 'right' : ''}`,
            }}
          >
            {message.msg_type === 'send' ? (
              <div className='col-auto chatitem-color-home chatitem-home'>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <i
                    onClick={moreOptions}
                    style={{
                      color: 'gray',
                      cursor: 'pointer',
                      fontSize: '0.8em',
                      zIndex: 10000,
                    }}
                    className='fas fa-ellipsis-v fa-sm fa-fw '
                  ></i>
                  <div
                    className={`more_options left ${
                      displayOptions ? 'is_visible' : 'is_hidden'
                    }`}
                  >
                    <p>Repondre</p>
                    <p
                      style={{ cursor: 'pointer' }}
                      onClick={onDeleteMessage}
                      id={message._id}
                    >
                      Supprimer
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.8em',
                    display: 'inline-block',
                    marginBottom: '15px',
                  }}
                >
                  {message.content}
                </span>

                <small
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontSize: '0.9em',
                    color: 'gray',
                  }}
                >
                  <Moment format='HH:mm' withTitle>
                    {message.created_at}
                  </Moment>
                </small>
              </div>
            ) : (
              ''
            )}
          </div>

          <div
            className={`${message.msg_type === 'send' ? 'col-2' : 'col-12 '} `}
          >
            {message.msg_type === 'send' ? (
              ''
            ) : (
              <div className='col-auto chatitem-color-away chatitem-away'>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                >
                  <i
                    onClick={moreOptions}
                    style={{
                      color: 'gray',
                      cursor: 'pointer',
                      fontSize: '0.8em',
                      zIndex: 10000,
                    }}
                    className='fas fa-ellipsis-v fa-sm fa-fw '
                  ></i>
                  <div
                    className={`more_options ${
                      displayOptions ? 'is_visible' : 'is_hidden'
                    }`}
                  >
                    <p>Repondre</p>
                    <p
                      style={{ cursor: 'pointer' }}
                      onClick={onDeleteMessage}
                      id={message._id}
                    >
                      Supprimer
                    </p>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.8em',
                    display: 'inline-block',
                    marginBottom: '15px',
                  }}
                >
                  {message.content}
                </span>
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontSize: '.9em',
                    color: 'gray',
                  }}
                >
                  <Moment format='HH:mm' withTitle>
                    {message.created_at}
                  </Moment>
                </span>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default ChatItems;
