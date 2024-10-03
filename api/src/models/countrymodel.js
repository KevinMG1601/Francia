const connection = require('../config/db');

const Country = {
    // Obtener todos los países
    getcountries: async () => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_country');
            return results;
        } catch (error) {
            console.error('Error al obtener los países:', error);
            throw error;
        }
    },

    // Obtener un país específico por su ID
    getcountry: async (id) => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_country WHERE countryid = ?', [id]);
            return results[0]; // Retorna el primer resultado si existe
        } catch (error) {
            console.error('Error al obtener el país:', error);
            throw error;
        }
    },

    // Crear un nuevo país
    createcountry: async (data) => {
        const { countryid, country, callingCode, flag, currency } = data;
        try {
            const [result] = await connection.execute(
                'INSERT INTO system_country (countryid, country, callingCode, flag, currency) VALUES (?, ?, ?, ?, ?)',
                [countryid, country, callingCode, flag, currency]
            );
            return result;
        } catch (error) {
            console.error('Error al crear el país:', error);
            throw error;
        }
    },

    // Actualizar un país existente
    updatecountry: async (id, data) => {
        const { country, callingCode, flag, currency } = data;
        try {
            const [result] = await connection.execute(
                'UPDATE system_country SET country = ?, callingCode = ?, flag = ?, currency = ? WHERE countryid = ?',
                [country, callingCode, flag, currency, id]
            );
            return result;
        } catch (error) {
            console.error('Error al actualizar el país:', error);
            throw error;
        }
    },

    // Eliminar un país por su ID
    deletecountry: async (id) => {
        try {
            const [result] = await connection.execute('DELETE FROM system_country WHERE countryid = ?', [id]);
            return result;
        } catch (error) {
            console.error('Error al eliminar el país:', error);
            throw error;
        }
    }
};

module.exports = Country;
