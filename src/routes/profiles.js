const express = require('express');
const router = express.Router();
const { sequelize } = require('../../database/connect');

router.get('/profiles', (req, res) => {
    sequelize.query('SELECT * FROM profiles ORDER BY profilename ASC', {
            type: sequelize.QueryTypes.SELECT
        })
        .then((profiles) => {
            res.json({
                data: profiles
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/profilestable', (req, res) => {
    sequelize.query('SELECT * FROM profiles ORDER BY idprofile DESC', {
            type: sequelize.QueryTypes.SELECT
        })
        .then((profiles) => {
            res.json({
                data: profiles
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.post('/profile', (req, res) => {
    const { profilename } = req.body;
    sequelize.query('INSERT INTO profiles VALUES(null, ?, null)', {
            replacements: [profilename]
        })
        .then((profile) => {
            res.json({
                message: "profile added succesfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.put('/profile/:id', (req, res) => {
    const id = req.params.id;
    const { profilename } = req.body;
    sequelize.query('UPDATE profiles SET profilename = ? WHERE idprofile = ?', {
            replacements: [profilename, id]
        })
        .then((profile) => {
            res.json({
                message: "profile update sucessfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.delete('/profile/:id', (req, res) => {
    const id = req.params.id;
    sequelize.query('DELETE FROM profiles WHERE idprofile = ?', {
            replacements: [id]
        })
        .then((profile) => {
            res.json({
                message: "profile deleted sucessfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;