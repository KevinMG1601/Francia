const Country = require('../models/countrymodel');

const countrycontroller = {
    getcountries: async (req, res) => {
        try {
            const results = await Country.getcountries();
            res.json(results);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener los países', error });
        }
    },

    getcountry: async (req, res) => {
        try {
            const { id } = req.params;
            const result = await Country.getcountry(id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error al obtener el país', error });
        }
    },

    createcountry: async (req, res) => {
        try {
            const data = req.body;
            await Country.createcountry(data);
            res.send('País creado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el país', error });
        }
    },

    updatecountry: async (req, res) => {
        try {
            const { id } = req.params;
            const data = req.body;
            await Country.updatecountry(id, data);
            res.send('País actualizado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al actualizar el país', error });
        }
    },

    deletecountry: async (req, res) => {
        try {
            const { id } = req.params;
            await Country.deletecountry(id);
            res.send('País eliminado exitosamente');
        } catch (error) {
            res.status(500).json({ message: 'Error al eliminar el país', error });
        }
    }
};

module.exports = countrycontroller;

