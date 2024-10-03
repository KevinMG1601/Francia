const Municipality = require('../models/municipalitymodel');

const municipalitycontroller = {
    // Obtener todos los municipios de un país y estado
    getmunicipalities: async (req, res) => {
        const { countryid, stateid } = req.params;
        try {
            const results = await Municipality.getmunicipalities(countryid, stateid);
            res.json(results);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener los municipios', error: err });
        }
    },

    // Obtener un municipio por su ID
    getmunicipality: async (req, res) => {
        const { cityid } = req.params;
        try {
            const result = await Municipality.getmunicipality(cityid);
            res.json(result);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener el municipio', error: err });
        }
    },

    // Crear un nuevo municipio
    createmunicipality: async (req, res) => {
        const data = req.body;
        try {
            await Municipality.createmunicipality(data);
            res.send('Municipio creado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al crear el municipio', error: err });
        }
    },

    // Actualizar un municipio existente
    updatemunicipality: async (req, res) => {
        const { cityid } = req.params;
        const data = req.body;
        try {
            await Municipality.updatemunicipality(cityid, data);
            res.send('Municipio actualizado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al actualizar el municipio', error: err });
        }
    },

    // Eliminar un municipio por su ID
    deletemunicipality: async (req, res) => {
        const { cityid } = req.params;
        try {
            await Municipality.deletemunicipality(cityid);
            res.send('Municipio eliminado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al eliminar el municipio', error: err });
        }
    }
};

module.exports = municipalitycontroller;
