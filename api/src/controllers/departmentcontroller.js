const Department = require('../models/departmentmodel');

const departmentcontroller = {
    getdepartments: async (req, res) => {
        try {
            const { countryid } = req.params;
            const results = await Department.getdepartments(countryid);
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los departamentos', error });
        }
    },

    getdepartment: async (req, res) => {
        try {
            const { countryid, stateid } = req.params;
            const result = await Department.getdepartment(countryid, stateid);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el departamento', error });
        }
    },

    createdepartment: async (req, res) => {
        try {
            const data = req.body;
            await Department.createdepartment(data);
            res.send('Departamento creado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el departamento', error });
        }
    },

    updatedepartment: async (req, res) => {
        try {
            const { countryid, stateid } = req.params;
            const data = req.body;
            await Department.updatedepartment(countryid, stateid, data);
            res.send('Departamento actualizado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el departamento', error });
        }
    },

    deletedepartment: async (req, res) => {
        try {
            const { countryid, stateid } = req.params;
            await Department.deletedepartment(countryid, stateid);
            res.send('Departamento eliminado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el departamento', error });
        }
    }
};

module.exports = departmentcontroller;
