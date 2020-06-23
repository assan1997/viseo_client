import React, { useState, useEffect, useRef } from 'react';
import SendIcon from '@material-ui/icons/Send';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import Fab from '@material-ui/core/Fab';
import MicIcon from '@material-ui/icons/Mic';
const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  currentUser,
}) => {
  let sendBtnRef = useRef();
  window.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) sendBtnRef.current.click();
  });
  return (
    <div className='row h-100'>
      <div className='col-12 h-100'>
        <div className='row h-100'>
          <div
            className='col-12 contact_zone_input'
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'whitesmoke',
            }}
          >
            <div className='col-xl-8 offset-xl-2'>
              <div className='row h-100'>
                <input
                  style={{
                    width: '100%',
                    borderRadius: '100px',
                    outline: 'none',
                    border: 'none',
                    color: 'gray',
                    height: '50px',
                    paddingLeft: '20px',
                  }}
                  placeholder={'Taper un message'}
                  value={messageContent}
                  onChange={manageMessageInput}
                  className='col-9'
                />
                <div
                  className='col-3 h-100'
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'red',
                  }}
                >
                  <button
                    ref={sendBtnRef}
                    onClick={onSendMessage}
                    style={{
                      color: 'silver',
                      background: 'transparent',
                      border: 'none',
                    }}
                  >
                    <SendIcon />
                  </button>
                  <button
                    ref={sendBtnRef}
                    onClick={onSendMessage}
                    style={{
                      color: 'silver',
                      background: 'transparent',
                      border: 'none',
                    }}
                  >
                    <RecordVoiceOverIcon />
                  </button>
                  <button
                    ref={sendBtnRef}
                    onClick={onSendMessage}
                    style={{
                      color: 'silver',
                      background: 'transparent',
                      border: 'none',
                    }}
                  >
                    <MicIcon />
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
