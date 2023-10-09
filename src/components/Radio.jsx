import React from "react";
import "./Radio.css";

export const Radio = (props) => {
  const { text, list } = props;
  return (
    <>
      <div className="radioButton">
        {text}
        <div className="radioField">
          <label className="inputRadioButton">
            <input type="radio" name="group" />
            {list[0]}
          </label>
          <label className="inputRadioButton">
            <input type="radio" name="group" />
            {list[1]}
          </label>
        </div>
      </div>
    </>
  );
};
