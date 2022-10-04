const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);


//middleweares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes

app.use(require('./routes/Rts'));
app.use('/api/versiones',require('./routes/versiones'))

//Empezando el servidoor
app.listen(app.get('port'),()=>{
    // console.log(`server on port ${app.get('port')}`);
});

