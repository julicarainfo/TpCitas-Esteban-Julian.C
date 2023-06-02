import './Form.css';
import React from 'react';
function Form({ type = "", text = "", placeholder ="", tipo="",name="", label = ""}) {
  let input;
  if (type === "textarea") {
    input = <textarea class="u-full-width" placeholder={placeholder} name={name}></textarea> 
  } else {
    input =<input type={tipo} name={name} class="u-full-width" placeholder={placeholder}></input>
  }
 return (
    <>
      <label>{label}</label>
      {input}
    </>
)
}
export default Form;