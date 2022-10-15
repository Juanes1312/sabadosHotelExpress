// importar el framework express
// const express = require('express')
// const app = express()

// atender la peticion y responder
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// levantando el servidor
// app.listen(3000, function(){
//     console.log("servidor encendido");
// })

// YA SE USARON ESOS ARCHIVOS 


import * as dotenv from 'dotenv'
dotenv.config()


import {API} from './api/API.js'

// creamos un objeto de la clase api para utilizarla
let apiHotel = new API()

// encender el servidor para poder ejecutar correctamente el api
apiHotel.levantarServidor()