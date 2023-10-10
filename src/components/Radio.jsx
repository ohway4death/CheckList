import React from "react";
import "./Radio.css";

export const Radio = (props) => {
  const { text, list } = props;
  return (
    <>
      <div className="radioButton">
        {text}
        <div className="radioField">
          {list.map((item, index) => {
            return (
              <label className="inputRadioButton">
                <input type="radio" name="group" />
                {item}
              </label>
            );
          })}
        </div>
      </div>
    </>
  );
};
