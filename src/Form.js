import './Form.css';
import React from 'react';
function Form({ type = "", text = ""}) {
  return (
    <>
    {
     <label>{text}</label>
    }
    </>);
}

export default Form;