import './Form.css';
import React from 'react';
function Form({ type = "", text = "", placeholder ="", tipo="",name=""}) {
 return (
    <>
    {
      type === "label" ? <label>{text}</label> : <input type={tipo} name={name} class="u-full-width" placeholder={placeholder}
      value=""></input>
    }
    </>
)
}
export default Form;