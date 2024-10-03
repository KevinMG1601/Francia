const express = require('express');
const departmentcontroller = require('../controllers/departmentcontroller');
const authenticateToken = require('../middleware/jwt')
const router = express.Router();

// Rutas utilizando async/await en los controladores
router.get('/:countryid',authenticateToken, departmentcontroller.getdepartments);
router.get('/:countryid/:stateid', authenticateToken, departmentcontroller.getdepartment);
router.post('/', authenticateToken, departmentcontroller.createdepartment);
router.put('/:countryid/:stateid', authenticateToken, departmentcontroller.updatedepartment);
router.delete('/:countryid/:stateid', authenticateToken, departmentcontroller.deletedepartment);

module.exports = router;
// Verifica que esto imprima funciones
