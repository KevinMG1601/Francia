const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secretKey } = require('../config/jwt');
const connection = require('../config/db');


const login = async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const [rows] = await connection.query("SELECT * FROM users WHERE user = ?", [usuario]);
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        const users = rows[0];
        const match = await bcrypt.compare(password, users.password);

        if (!match) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }


        const token = jwt.sign({ id: users.id, usuario: users.user, password: users.password }, secretKey, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

module.exports = { login };