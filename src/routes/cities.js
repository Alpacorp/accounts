const express = require('express');
const router = express.Router();
const { sequelize } = require('../../database/connect');

router.get('/cities', (req, res) => {
    sequelize.query('SELECT * FROM cities ORDER BY city ASC', {
            type: sequelize.QueryTypes.SELECT
        })
        .then((cities) => {
            res.json({
                data: cities
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;