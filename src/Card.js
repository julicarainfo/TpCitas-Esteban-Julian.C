import './Card.css';
import React from 'react';
function Form({ type = "", text = "", placeholder ="", tipo="",name=""}) {
 return (
    <>
     <div>{
      type === "label" ? <label>{text}</label> : <input type={tipo} name={name} class="u-full-width" placeholder={placeholder}
      value=""></input>
    }
    </div>
    </>
)
}
export default Form;