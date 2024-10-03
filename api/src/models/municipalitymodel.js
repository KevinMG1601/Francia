const connection = require('../config/db');

const Municipality = {
    getmunicipalities: async (countryid, stateid) => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_city WHERE countryid = ? AND stateid = ?', [countryid, stateid]);
            return results;
        } catch (error) {
            throw error;
        }
    },

    getmunicipality: async (cityid) => {
        try {
            const [result] = await connection.execute('SELECT * FROM system_city WHERE cityid = ?', [cityid]);
            return result;
        } catch (error) {
            throw error;
        }
    },

    createmunicipality: async (data) => {
        const { cityid, name, name2, countryid, stateid, latitud, longitud } = data;
        try {
            await connection.execute('INSERT INTO system_city (cityid, name, name2, countryid, stateid, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?, ?)', 
                [cityid, name, name2, countryid, stateid, latitud, longitud]);
        } catch (error) {
            throw error;
        }
    },

    updatemunicipality: async (cityid, data) => {
        const { name, name2, latitud, longitud } = data;
        try {
            await connection.execute('UPDATE system_city SET name = ?, name2 = ?, latitud = ?, longitud = ? WHERE cityid = ?', 
                [name, name2, latitud, longitud, cityid]);
        } catch (error) {
            throw error;
        }
    },

    deletemunicipality: async (cityid) => {
        try {
            await connection.execute('DELETE FROM system_city WHERE cityid = ?', [cityid]);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Municipality;
