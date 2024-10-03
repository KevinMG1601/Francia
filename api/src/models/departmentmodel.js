const connection = require('../config/db');

const Department = {
    getdepartments: async (countryid) => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_state WHERE countryid = ?', [countryid]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getdepartment: async (countryid, stateid) => {
        try {
            const [result] = await connection.execute('SELECT * FROM system_state WHERE countryid = ? AND stateid = ?', [countryid, stateid]);
            return result;
        } catch (error) {
            throw error;
        }
    },

    createdepartment: async (data) => {
        const { countryid, stateid, name } = data;
        try {
            await connection.execute('INSERT INTO system_state (countryid, stateid, name) VALUES (?, ?, ?)', [countryid, stateid, name]);
        } catch (error) {
            throw error;
        }
    },

    updatedepartment: async (countryid, stateid, data) => {
        const { name } = data;
        try {
            await connection.execute('UPDATE system_state SET name = ? WHERE countryid = ? AND stateid = ?', [name, countryid, stateid]);
        } catch (error) {
            throw error;
        }
    },

    deletedepartment: async (countryid, stateid) => {
        try {
            await connection.execute('DELETE FROM system_state WHERE countryid = ? AND stateid = ?', [countryid, stateid]);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Department;
