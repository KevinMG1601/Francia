const connection = require('../config/db');

const Country = {
    getcountries: async () => {
        try {
            const [results] = await connection.execute('SELECT * FROM system_country');
            return results;
        } catch (error) {
            throw error;
        }
    },

    getcountry: async (id) => {
        try {
            const [result] = await connection.execute('SELECT * FROM system_country WHERE countryid = ?', [id]);
            return result;
        } catch (error) {
            throw error;
        }
    },

    createcountry: async (data) => {
        const { countryid, country, callingCode, flag, currency } = data;
        try {
            await connection.execute('INSERT INTO system_country (countryid, country, callingCode, flag, currency) VALUES (?, ?, ?, ?, ?)', 
                [countryid, country, callingCode, flag, currency]);
        } catch (error) {
            throw error;
        }
    },

    updatecountry: async (id, data) => {
        const { country, callingCode, flag, currency } = data;
        try {
            await connection.execute('UPDATE system_country SET country = ?, callingCode = ?, flag = ?, currency = ? WHERE countryid = ?', 
                [country, callingCode, flag, currency, id]);
        } catch (error) {
            throw error;
        }
    },

    deletecountry: async (id) => {
        try {
            await connection.execute('DELETE FROM system_country WHERE countryid = ?', [id]);
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Country;
