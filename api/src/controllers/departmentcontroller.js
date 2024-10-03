const Department = require('../models/departmentmodel');

const departmentcontroller = {
    getdepartments: async (req, res) => {
        try {
            const results = await Department.getdepartments(req.params.countryid);
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los departamentos' });
        }
    },
    getdepartment: async (req, res) => {
        try {
            const result = await Department.getdepartment(req.params.countryid, req.params.stateid);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el departamento' });
        }
    },
    createdepartment: async (req, res) => {
        try {
            await Department.createdepartment(req.body);
            res.send('Departamento creado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el departamento' });
        }
    },
    updatedepartment: async (req, res) => {
        try {
            await Department.updatedepartment(req.params.countryid, req.params.stateid, req.body);
            res.send('Departamento actualizado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el departamento' });
        }
    },
    deletedepartment: async (req, res) => {
        try {
            await Department.deletedepartment(req.params.countryid, req.params.stateid);
            res.send('Departamento eliminado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el departamento' });
        }
    }
};

module.exports = departmentcontroller;
