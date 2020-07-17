import React from 'react';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FaceIcon from '@material-ui/icons/Face';
import emoji from 'emojis-list';
const SmileyComponent = ({ onUseEmoji }) => {
  return (
    <div className='row h-100'>
      <div className='col-12' style={{ overflow: 'scroll', height: '80%' }}>
        {emoji.map((e, index) => (
          <span
            key={index}
            name={e}
            onClick={onUseEmoji}
            style={{ cursor: 'pointer', margin: '3px' }}
          >
            <span style={{ fontSize: '2em' }}>{e}</span>
          </span>
        ))}
      </div>
      <div
        className='col-12'
        style={{
          position: 'absolute',
          bottom: '0',
          backgroundColor: 'whitesmoke',
          height: '20%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div>
          <EmojiFlagsIcon />
        </div>
        <div>
          <InsertEmoticonIcon />
        </div>
        <div>
          <FaceIcon />
        </div>
      </div>
    </div>
  );
};
export default SmileyComponent;
