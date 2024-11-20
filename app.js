const express = require('express');
const controllers = require('./controllers/temacontrollers');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Rutas conectadas al controlador
app.get('/', controllers.showAll);
app.post('/add', controllers.addtema);
app.post('/vote/:id', controllers.votartema);
app.post('/delete/:id', controllers.deletetema);
app.put('/Update/:id', controllers.Update);
// Inicializamos el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en  http://localhost:3000');
});
