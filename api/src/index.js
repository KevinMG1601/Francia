require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const departament = require('./routes/departmentroutes');
const country = require('./routes/countryroutes');
const auth = require('./routes/auth');
const municipality = require('./routes/municipalityroutes');

app.use(helmet());       
app.use(morgan('dev'));
app.use(express.json());
app.use('/departament', departament);
app.use('/country', country);
app.use('/auth', auth);
app.use('/municipality', municipality);
app.use(cors());           


// Puerto de escucha
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});