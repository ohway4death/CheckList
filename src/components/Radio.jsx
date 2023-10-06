import React from "react";
import "./Radio.css";

export const Radio = (props) => {
  const { text, list } = props;
  return (
    <>
      <div>
        {text}
        <label>
          <input type="radio" />
          {list[0]}
        </label>
        <label>
          <input type="radio" />
          {list[1]}
        </label>
      </div>
    </>
  );
};
