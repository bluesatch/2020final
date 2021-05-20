const connection = require('../../config/dbconfig');

const artistDao = {
    table: 'artist',
    create: (req, res) => {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            });
        } else {
            const fields = Object.keys(req.body); //creates an array
            const values = Object.values(req.body); // creates an array
            connection.execute(
                `INSERT INTO artist SET ${fields.join(' = ?, ')} = ?`,
                values,
                (error, dbres) => {
                    if (!error) {
                        res.send(`Last id: ${dbres.inserId}`);
                    } else {
                        console.log('DAO Error', error);
                        res.send('Error creating record.')
                    }
                });
            }
    },

    update: (req, res) => {
        if (isNaN(req.params.id)) {
            res.json({
                "error": true,
                "message": "Id must be a number."
            });
        } else if (Object.keys(req.body) === 0) {
            res.json({
                "error": true,
                "message": "No fields to update"
            });
        } else {
            const fields = Object.keys(req.body);
            const values = Object.values(req.body);

            connection.execute(
                `UPDATE artist SET ${fields.join(' = ?, ')} = ? WHERE id = ?`,
                [...values, req.params.id],
                (error, dbres) => {
                    if (!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`);
                    } else {
                        console.log('DAO Error', error);
                        res.send('Error updating record');
                    }
                });
        }
    }
};

module.exports = artistDao;