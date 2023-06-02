import './Card.css';
import React from 'react';

function Card({nombreMascota="", nombreDueño="",fecha="",hora="",sintomas="", clase="", textoBoton=""}) {
 return (
    <>
    {  
         <div class="cita">
            <p>Nombre Mascota: <span>{nombreMascota}</span></p>
            <p>Nombre Mascota: <span>{nombreDueño}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
         </div>
    //<p>{text1} <span type="span">{text2}</span></p>
    }
    </>
)
}
export default Card;