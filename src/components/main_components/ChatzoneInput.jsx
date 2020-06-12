import React, { useState, useEffect, useRef } from 'react';

const ChatzoneInput = ({
  manageMessageInput,
  messageContent,
  onSendMessage,
  currentUser,
}) => {
  let sendBtnRef = useRef();
  document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) sendBtnRef.current.click();
  });
  return (
    <div className='row h-100'>
      <div className='col-12 h-100'>
        <div className='row h-100'>
          <div
            className='col-10 contact_zone_input'
            style={{ paddingTop: '10px' }}
          >
            <input
              style={{
                height: '80%',
                width: '90%',
                borderRadius: '150px',
                outline: 'none',
                border: 'none',
                paddingLeft: '15px',

                color: 'gray',
              }}
              placeholder={'Taper votre message'}
              value={messageContent}
              onChange={manageMessageInput}
            />
            <span style={{ height: '100%', width: '2%' }}>
              <i
                style={{
                  color: 'silver',
                  fontSize: '1.2em',
                }}
                className='fas fa-smile'
              ></i>
            </span>
          </div>
          <button
            ref={sendBtnRef}
            onClick={onSendMessage}
            className='col-2 contact_zone_button'
            style={{
              height: '100%',
              borderBottomRightRadius: '3px',
              background: 'transparent',
              border: 'none',
            }}
            disabled={
              currentUser !== undefined &&
              messageContent !== '' &&
              messageContent !== undefined
                ? false
                : true
            }
          >
            <i className='fas fa-paper-plane'></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatzoneInput;
