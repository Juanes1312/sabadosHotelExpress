import express from 'express'

// en el archivo de rutas creo una variable encargada de definir todos los endpoits de mi api

// por cada servicio que ordene mi api debe tener un endpoit o ruta

export let rutas = express.Router()

// defino las rutas parar cada servicio de mi api

// el registro de una habitacion
rutas.post('/api/hotel/habitaciones',function (req, res) {
    res.send("Estamos registrando una habitacion");
  })

// buscar todas las habitaciones que tengo registradas
rutas.get('/api/hotel/habitaciones', function (req, res) {
    res.send("Estamos buscando habitacones");
  })

// buscar ua habitacion por id
rutas.get('/api/hotel/habitaciones/:id', function (req, res) {
    res.send("Estamos buscando un habitacon por id");
  })

// editar los datos de una habitacion 
rutas.put('/api/hotel/habitaciones/:id', function (req, res) {
    res.send("Estamos editando una habitacion ");
  })
