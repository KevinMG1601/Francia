const mysql = require('mysql2/promise');
require('dotenv').config();

// Crear un pool de conexiones
const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'francia',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// No es necesario llamar a connection.connect() cuando usas un pool
// El pool gestiona automáticamente las conexiones
connection.getConnection()
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1); // Cerrar el proceso si hay un error
    });

module.exports = connection;