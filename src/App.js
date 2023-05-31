import './App.css';
import Titulos from './Titulos.js';
import Form from './Form.js';
import Boton from './Boton.js';
import TextArea from './TextArea.js';

function App() {
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
                      <Form type="input" text="" placeholder='Nombre Mascota' tipo='text' name='Mascota'></Form>
                      
                      <Form type="label" text="Nombre Dueño" placeholder='' tipo=''></Form>
                      <Form type="input" text="" placeholder='Nombre Dueño' tipo='text' name='Dueño'></Form>
                      
                      <Form type="label" text="Fecha" placeholder='' tipo=''></Form>
                      <Form type="input" text="" placeholder='' tipo='date' name='Fecha'></Form>  
                      
                      <Form type="label" text="Hora" placeholder='' tipo='' name=''></Form>
                      <Form type="input" text="" placeholder='' tipo='time' name='Hora'></Form>
                      
                      <Form type="label" text="Sintomas" placeholder='' tipo='' name=''></Form>
                      <TextArea clase="u-full-width" placeholder='Sintomas' name='sintomas'></TextArea>
                      <Boton type="submit" clase='u-full-width button-primary' text='Agregar Cita'></Boton>
                    </form>
                  </div>
                  <div class="one-half column">
                  <Titulos type="h2" text="Administra tus citas"></Titulos>
                    <div class="cita">
                      <p>Mascota: <span>Nina</span></p>
                      <p>Dueño: <span>Martin</span></p>
                      <p>Fecha: <span>2021-08-05</span></p>
                      <p>Hora: <span>08:20</span></p>
                      <p>Sintomas: <span>Le duele la pierna</span></p><Boton clase='button elimnar u-full-width' text='Eliminar'> ×</Boton>
                    </div>
                    <div class="cita">
                      <p>Mascota: <span>Sifon</span></p>
                      <p>Dueño: <span>Flecha</span></p>
                      <p>Fecha: <span>2023-08-05</span></p>
                      <p>Hora: <span>09:24</span></p>
                      <p>Sintomas: <span>Duerme mucho</span></p><Boton clase='button elimnar u-full-width' text='Eliminar'>Eliminar ×</Boton>
                    </div>
                    <div class="cita">
                      <p>Mascota: <span>Floki</span></p>
                      <p>Dueño: <span>Ari</span></p>
                      <p>Fecha: <span>2023-08-05</span></p>
                      <p>Hora: <span>16:15</span></p>
                      <p>Sintomas: <span>No está comiendo</span></p><Boton clase='button elimnar u-full-width' text='Eliminar'>Eliminar ×</Boton>
                    </div>
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
