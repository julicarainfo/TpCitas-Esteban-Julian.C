import './TextArea.css';
import React from 'react';
function TextArea({clase = "", placeholder = "", name = ""}) {
 return (
    <>
    {
       <textarea class={clase} placeholder={placeholder} name={name}></textarea> 
    }
    </>
)
}
export default TextArea;