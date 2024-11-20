const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Crea la tabla si no existe
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS temas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tema TEXT,
        url TEXT,
        votos INTEGER DEFAULT 0
    )
    `);
});

module.exports = db;
