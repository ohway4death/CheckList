import React from "react";
import "./InputText.css";

export const InputText = (props) => {
  const { text, supplement } = props;
  return (
    <>
      <div className="inputText">
        {text}
        <input className="inputTextBox" type="text" />
      </div>

      <div className="supplement">※{supplement}</div>
    </>
  );
};
