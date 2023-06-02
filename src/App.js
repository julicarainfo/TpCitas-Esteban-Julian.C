import './App.css';
import Titulos from './Titulos.js';
import Form from './Form.js';
import Boton from './Boton.js';
import Card from './Card.js';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([{
    "mascota": 'Nina',
    "dueño": 'Martin',
    "fecha": '2021-08-05',
    "hora": '08:20',
    "sintomas": 'Le duele la pierna',

  }]);
  const agregarCita = (evento) => {
    evento.preventDefault();
    setCitas(
      [
        ...citas,
        {
          mascota: evento.target.Mascota.value,
          dueño: evento.target.Dueño.value,
          fecha: evento.target.Fecha.value,
          hora: evento.target.Hora.value,
          sintomas: evento.target.Sintomas.value
        }
      ]
    );

    evento.target.Mascota.value = '';
    evento.target.Dueño.value = '';
    evento.target.Fecha.value = '';
    evento.target.Hora.value = '';
    evento.target.Sintomas.value = '';
  }
  const eliminarCita = id =>{
      setCitas(
        citas.filter( cita => citas.indexOf(cita) !== id )
      );
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
                <form onSubmit={(e) => agregarCita(e)}>
                  <Form type="input" text="" label="Nombre Mascota" placeholder='Nombre Mascota' tipo='text' name='Mascota'></Form>

                  <Form type="input" label="Nombre Dueño" text="" placeholder='Nombre Dueño' tipo='text' name='Dueño'></Form>

                  <Form type="input" text="" label="Fecha" placeholder='' tipo='date' name='Fecha'></Form>

                  <Form type="input" text="" label="Hora" placeholder='' tipo='time' name='Hora'></Form>

                  <Form type="textarea" label="Sintomas" clase="u-full-width" placeholder='Sintomas' name='Sintomas'></Form>

                  <Boton type="submit" clase='u-full-width button-primary' text='Agregar Cita'></Boton>
                </form>
              </div>
              <div class="one-half column">
                <Titulos type="h2" text="Administra tus citas"></Titulos>
                {citas.map(cita =><div className='cita'><Card nombreMascota={cita.mascota} nombreDueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></Card>         
                <button onClick={() => eliminarCita(citas.indexOf(cita))} class='button elimnar u-full-width'>Eliminar</button> </div>)}
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
