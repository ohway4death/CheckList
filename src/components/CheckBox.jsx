import React from "react";
import "./CheckBox.css";

export const CheckBox = (props) => {
  const { text } = props;
  return (
    <>
      <div>
        <label className="CheckBox">
          <input className="input" type="checkbox" />
          {text}
        </label>
      </div>
    </>
  );
};
