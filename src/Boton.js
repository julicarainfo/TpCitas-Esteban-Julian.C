import './boton.css';
import React from 'react';
function Boton({ type = "", text = "", clase = ""}) {
 return (
    <>
    {
       <button type={type} class={clase}>{text}</button> 
    }
    </>
)
}
export default Boton;