const Country = require('../models/countrymodel');

const countrycontroller = {
    // Obtener todos los países
    getcountries: async (req, res) => {
        try {
            const results = await Country.getcountries();
            res.json(results);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener los países', error: err });
        }
    },

    // Obtener un país por su ID
    getcountry: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await Country.getcountry(id);
            res.json(result);
        } catch (err) {
            res.status(500).json({ message: 'Error al obtener el país', error: err });
        }
    },

    // Crear un nuevo país
    createcountry: async (req, res) => {
        const data = req.body;
        try {
            await Country.createcountry(data);
            res.send('País creado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al crear el país', error: err });
        }
    },

    // Actualizar un país existente
    updatecountry: async (req, res) => {
        const { id } = req.params;
        const data = req.body;
        try {
            await Country.updatecountry(id, data);
            res.send('País actualizado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al actualizar el país', error: err });
        }
    },

    // Eliminar un país por su ID
    deletecountry: async (req, res) => {
        const { id } = req.params;
        try {
            await Country.deletecountry(id);
            res.send('País eliminado exitosamente');
        } catch (err) {
            res.status(500).json({ message: 'Error al eliminar el país', error: err });
        }
    }
};

module.exports = countrycontroller;
