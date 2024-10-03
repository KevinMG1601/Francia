const connection = require('../config/db');

const Municipality = {
    // Obtener todos los municipios de un estado y país específicos
    getmunicipalities: async (countryid, stateid) => {
        try {
            const [results] = await connection.execute(
                'SELECT * FROM system_city WHERE countryid = ? AND stateid = ?',
                [countryid, stateid]
            );
            return results;
        } catch (error) {
            console.error('Error al obtener los municipios:', error);
            throw error;
        }
    },

    // Obtener un municipio específico
    getmunicipality: async (cityid) => {
        try {
            const [results] = await connection.execute(
                'SELECT * FROM system_city WHERE cityid = ?',
                [cityid]
            );
            return results[0]; // Retorna el primer resultado si existe
        } catch (error) {
            console.error('Error al obtener el municipio:', error);
            throw error;
        }
    },

    // Crear un nuevo municipio
    createmunicipality: async (data) => {
        const { cityid, name, name2, countryid, stateid, latitud, longitud } = data;
        try {
            const [result] = await connection.execute(
                'INSERT INTO system_city (cityid, name, name2, countryid, stateid, latitud, longitud) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [cityid, name, name2, countryid, stateid, latitud, longitud]
            );
            return result;
        } catch (error) {
            console.error('Error al crear el municipio:', error);
            throw error;
        }
    },

    // Actualizar un municipio existente
    updatemunicipality: async (cityid, data) => {
        const { name, name2, latitud, longitud } = data;
        try {
            const [result] = await connection.execute(
                'UPDATE system_city SET name = ?, name2 = ?, latitud = ?, longitud = ? WHERE cityid = ?',
                [name, name2, latitud, longitud, cityid]
            );
            return result;
        } catch (error) {
            console.error('Error al actualizar el municipio:', error);
            throw error;
        }
    },

    // Eliminar un municipio
    deletemunicipality: async (cityid) => {
        try {
            const [result] = await connection.execute(
                'DELETE FROM system_city WHERE cityid = ?',
                [cityid]
            );
            return result;
        } catch (error) {
            console.error('Error al eliminar el municipio:', error);
            throw error;
        }
    }
};

module.exports = Municipality;
