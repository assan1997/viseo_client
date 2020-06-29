import React from "react";
const emoji = require("emojis-list");
const SmileyComponent = ({ onUseEmoji }) => {
  return (
    <div className="smiley">
      {emoji.map((e, index) => (
        <span
          key={index}
          name={e}
          onClick={onUseEmoji}
          style={{ cursor: "pointer", margin: "5px" }}
        >
          {e}
        </span>
      ))}
    </div>
  );
};
export default SmileyComponent;
