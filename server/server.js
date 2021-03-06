require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ estended: false}))
app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.send('<h1> BIENVENIDO A MI SERVIDOR REST <h1>');
});
 
app.get('/usuario', function (req, res) {
    res.json ({ 
      ok:200,
      mensaje: 'Usuarios consultados con exito'
    });
  });

app.post('/usuario', function(req, res){
let nombre = req.body.nombre;
let body = req.body;

if(nombre === undefined){
    res.status(400).json({
        ok: 400,
        menseje: 'Favor de enviar valor de nombre',
    });
}else{
        res.json({
        ok: 200,
        mensaje: 'Usuario insertado con exito'
        });
    }
});

app.put('/usuario/:id/:nombre', function (req, res){
let id = req.params.id;
let nombre = req.params.nombre;

res.json({
    ok: 200, 
    mensaje: 'Usuario actualizado con exito',
    id : id,
    nombre: nombre
});
});

app.delete('/usuario/:id', function(req, res){
let id = req.params.id;

res.json({
    ok: 200, 
    mensaje: 'Usuario eliminado con exito',
    id: id
});
});

app.listen(process.env.PORT, () =>{
 console.log('Servidor en line por puerto ',process.env.PORT);
});


