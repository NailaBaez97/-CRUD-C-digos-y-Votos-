const Temas = require('../models/temamodels');

const temacontrollers = {
    showAll(req, res) {
        Temas.getAll((err, temas) => {
            if (err) {
                return res.status(500).send("Error al obtener los temas.");
            }
            res.render('index', { temas });
        });
    },

    addtema(req, res) {
        const { tema, url } = req.body;
        Temas.add(tema, url, (err) => {
            if (err) {
                return res.status(500).send("Error al agregar el tema.");
            }
            res.redirect('/');
        });
    },

    votartema(req, res) {
        const { id } = req.params;
        Temas.votos(id, (err) => {
            if (err) {
                return res.status(500).send("Error al votar por el tema.");
            }
            res.redirect('/');
        });
    },

    deletetema(req, res) {
        const { id } = req.params;
        Temas.delete(id, (err) => {
            if (err) {
                return res.status(500).send("Error al eliminar el tema.");
            }
            res.redirect('/');
        });
    },
    Update(req, res) {
        const { id } = req.params;
        const { tema, url } = req.body;
        Temas.Update(tema, url, id, (err) => {
            if (err) {
                return res.status(500).send("Error al actualizar el tema.");
            }
            res.redirect('/');
        });
    }

};

module.exports = temacontrollers;

