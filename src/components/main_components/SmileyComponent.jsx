import React from 'react';
const emoji = require('emojis-list');
const SmileyComponent = ({ onUseEmoji }) => {
  return (
    <div>
      {emoji.map((e, index) => (
        <span
          key={index}
          name={e}
          onClick={onUseEmoji}
          style={{ cursor: 'pointer', margin: '5px' }}
        >
          <span style={{ fontSize: '2em' }}>{e}</span>
        </span>
      ))}
    </div>
  );
};
export default SmileyComponent;
