const express = require('express');
const departmentcontroller = require('../controllers/departmentcontroller');
const authenticateToken = require('../middleware/jwt');
const router = express.Router();

// Usar los controladores como funciones con async/await
router.get('/:countryid', authenticateToken, async (req, res) => {
    try {
        await departmentcontroller.getdepartments(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener departamentos' });
    }
});

router.get('/:countryid/:stateid', authenticateToken, async (req, res) => {
    try {
        await departmentcontroller.getdepartment(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el departamento' });
    }
});

router.post('/', authenticateToken, async (req, res) => {
    try {
        await departmentcontroller.createdepartment(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el departamento' });
    }
});

router.put('/:countryid/:stateid', authenticateToken, async (req, res) => {
    try {
        await departmentcontroller.updatedepartment(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el departamento' });
    }
});

router.delete('/:countryid/:stateid', authenticateToken, async (req, res) => {
    try {
        await departmentcontroller.deletedepartment(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el departamento' });
    }
});

module.exports = router;
