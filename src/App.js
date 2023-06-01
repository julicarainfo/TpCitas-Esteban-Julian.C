import './App.css';
import Titulos from './Titulos.js';
import Form from './Form.js';
import Boton from './Boton.js';
import TextArea from './TextArea.js';
import Card from './Card.js';
import { useState } from 'react';

function App() {
  const [nombreDueño, setNombreDueño] = useState('');
  const [nombreMascota, setNombreMascota] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [citas, setCitas] = useState([]);
  const agregarCita = evento => {
    evento.preventDefault();
    setCitas(
      [
        ...citas,
        evento.target.nombreDueño.value,
        evento.target.nombreMascota.value,
        evento.target.fecha.value,
        evento.target.hora.value,
        evento.target.sintomas.value,
      ]
    );
    
    evento.target.nombre.value = '';
  }

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="theme-color" content="#000000"></meta>
        <meta name="description" content="Web site created using create-react-app"></meta>
        <link rel="apple-touch-icon" href="/logo192.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <title>Administración de Pacientes</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
          <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
             <Titulos type="h1" text="ADMINISTRADOR DE PACIENTES"></Titulos>
              <div class="container">
                <div class="row">
                  <div class="one-half column">
                  <Titulos type="h2" text="Crear mi cita"></Titulos>
                    <form>
                      <Form type="label" text="Nombre Mascota" placeholder='' tipo='' name=''></Form>
                      <Form onKeyUp={(e) => setNombreMascota(e.target.value)} type="input" text="" placeholder='Nombre Mascota' tipo='text' name='Mascota'></Form>
                      
                      <Form type="label" text="Nombre Dueño" placeholder='' tipo=''></Form>
                      <Form onKeyUp={(e) => setNombreDueño(e.target.value)} type="input" text="" placeholder='Nombre Dueño' tipo='text' name='Dueño'></Form>
                      
                      <Form type="label" text="Fecha" placeholder='' tipo=''></Form>
                      <Form onKeyUp={(e) => setFecha(e.target.value)} type="input" text="" placeholder='' tipo='date' name='Fecha'></Form>  
                      
                      <Form type="label" text="Hora" placeholder='' tipo='' name=''></Form>
                      <Form onKeyUp={(e) => setHora(e.target.value)} type="input" text="" placeholder='' tipo='time' name='Hora'></Form>
                      
                      <Form onKeyUp={(e) => setSintomas(e.target.value)} type="label" text="Sintomas" placeholder='' tipo='' name=''></Form>
                      <TextArea clase="u-full-width" placeholder='Sintomas' name='sintomas'></TextArea>
                      <Boton type="submit" clase='u-full-width button-primary' text='Agregar Cita'></Boton>
                    </form>
                  </div>
                  <div class="one-half column">
                  <Titulos type="h2" text="Administra tus citas"></Titulos>
                      <Card  nombreMascota='Nina' nombreDueño='Martin' fecha='2021-08-05' hora='08:20' sintomas='Le duele la pierna' clase='button elimnar u-full-width' textoBoton='Eliminar'></Card>
                  </div>
                </div>
              </div>
            </div>
            <script src="/static/js/bundle.js"></script>
            <script src="/static/js/vendors~main.chunk.js"></script>
            <script src="/static/js/main.chunk.js"></script>

          </body>

        </html>
        );
}

        export default App;
