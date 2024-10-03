const connection = require('../config/db');

const Department = {
    // Obtener todos los departamentos de un país específico
    getdepartments: async (countryid) => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_state WHERE countryid = ?', [countryid]);
            return results;
        } catch (error) {
            console.error('Error al obtener los departamentos:', error);
            throw error;
        }
    },

    // Obtener un departamento específico
    getdepart: async (countryid, stateid) => {
        try {
            const [result] = await connection.execute('SELECT * FROM system_state WHERE countryid = ? AND stateid = ?', [countryid, stateid]);
            return result;
        } catch (error) {
            console.error('Error al obtener el departamento:', error);
            throw error;
        }
    },

    // Crear un nuevo departamento
    createdepartment: async (data) => {
        const { countryid, stateid, name } = data;
        try {
            await connection.execute('INSERT INTO system_state (countryid, stateid, name) VALUES (?, ?, ?)', 
                [countryid, stateid, name]);
        } catch (error) {
            console.error('Error al crear el departamento:', error);
            throw error;
        }
    },

    // Actualizar un departamento existente
    updatedepartment: async (countryid, stateid, data) => {
        const { name } = data;
        try {
            await connection.execute('UPDATE system_state SET name = ? WHERE countryid = ? AND stateid = ?', 
                [name, countryid, stateid]);
        } catch (error) {
            console.error('Error al actualizar el departamento:', error);
            throw error;
        }
    },

    // Eliminar un departamento
    deletedepartment: async (countryid, stateid) => {
        try {
            await connection.execute('DELETE FROM system_state WHERE countryid = ? AND stateid = ?', [countryid, stateid]);
        } catch (error) {
            console.error('Error al eliminar el departamento:', error);
            throw error;
        }
    }
};

module.exports = Department;
