import React from "react";
import "./CheckBox.css";

export const CheckBox = (props) => {
  const { text } = props;
  return (
    <>
      <div className="checkBox">
        <label>
          <input className="inputCheckBox" type="checkbox" />
          {text}
        </label>
      </div>
    </>
  );
};
