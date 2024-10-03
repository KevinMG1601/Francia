const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secretKey } = require('../config/jwt');
const connection = require('../config/db');

const SALT_ROUNDS = 10;

// Controlador para registrar un nuevo usuario
const registerUser = async (req, res) => {
    const {  name, user, password } = req.body;

    try {
        // Encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Insertar el nuevo usuario en la base de datos
        const [result] = await connection.execute(
            "INSERT INTO users (name, user, password) VALUES (?, ?, ?)",
            [ name, user, hashedPassword]
        );

        // Respuesta exitosa
        res.status(201).json({ message: 'Usuario registrado exitosamente', userId: result.insertId });
    } catch (error) {
        // En caso de error en el servidor
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

// Controlador para el login de usuario
const login = async (req, res) => {
    const { usuario, password } = req.body;

    try {
        // Consulta para obtener el usuario
        const [rows] = await connection.execute("SELECT * FROM users WHERE user = ?", [usuario]);
        
        // Si no se encuentra el usuario
        if (rows.length === 0) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        const user = rows[0];
        
        // Verificación de la contraseña
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
        }

        // Generación del token JWT
        const token = jwt.sign({ id: user.id, usuario: user.user }, secretKey, { expiresIn: '1h' });

        // Devolver el token como respuesta
        res.status(200).json({ token });
    } catch (error) {
        // En caso de error en el servidor
        res.status(500).json({ message: 'Error en el servidor', error });
    }
};

module.exports = { registerUser, login };
