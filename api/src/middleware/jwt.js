// authmiddleware.js
const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');

// Middleware para verificar login correcto.
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(401).json({ message: 'Token no proporcionado' });

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token inválido' });
        req.user = user;
        next();
    });
};



module.exports = {authenticateToken };