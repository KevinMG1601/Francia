const Municipality = require('../models/municipalitymodel');

const municipalitycontroller = {
    getmunicipalities: async (req, res) => {
        try {
            const { countryid, stateid } = req.params;
            const results = await Municipality.getmunicipalities(countryid, stateid);
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los municipios', error });
        }
    },

    getmunicipality: async (req, res) => {
        try {
            const { cityid } = req.params;
            const result = await Municipality.getmunicipality(cityid);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el municipio', error });
        }
    },

    createmunicipality: async (req, res) => {
        try {
            const data = req.body;
            await Municipality.createmunicipality(data);
            res.send('Municipio creado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el municipio', error });
        }
    },

    updatemunicipality: async (req, res) => {
        try {
            const { cityid } = req.params;
            const data = req.body;
            await Municipality.updatemunicipality(cityid, data);
            res.send('Municipio actualizado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el municipio', error });
        }
    },

    deletemunicipality: async (req, res) => {
        try {
            const { cityid } = req.params;
            await Municipality.deletemunicipality(cityid);
            res.send('Municipio eliminado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el municipio', error });
        }
    }
};

module.exports = municipalitycontroller;
