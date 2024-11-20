const { Update } = require('../controllers/temacontrollers');
const db = require('./db');

const Temas = {
    getAll(callback) {
        db.all('SELECT * FROM temas ORDER BY votos DESC', callback);
    },

    add(tema, url, callback) {
        db.run('INSERT INTO temas (tema, url, votos) VALUES (?, ?, 0)', [tema, url], callback);

    },

    votos(id, callback) {
        db.run('UPDATE temas SET votos = votos + 1 WHERE id = ?', [id], callback);
    },

    delete(id, callback) {
        db.run('DELETE FROM temas WHERE id = ?', [id], callback);
    },
    Update(tema, url, id, callback) {
        db.run('UPDATE temas SET tema = ?, url = ? WHERE id = ?', [tema, url, id], function (err) {
            if (err) {
                return callback(err);
            }
            callback(null, this.changes);
        });
    }
};

module.exports = Temas;


