import React from "react";
import "./InputText.css";

export const InputText = (props) => {
  const { text, supplement } = props;
  return (
    <>
      <label className="inputText">
        {text}
        <input className="input" type="text" />
      </label>
      <p>※{supplement}</p>
    </>
  );
};
