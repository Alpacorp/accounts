const express = require('express');
const router = express.Router();
const { sequelize } = require('../../database/connect');

router.get('/agents', (req, res) => {
    sequelize.query('SELECT * FROM agents', {
            type: sequelize.QueryTypes.SELECT
        })
        .then((agents) => {
            res.json({
                message: agents
            })
        })
        .catch((error) => {
            console.log(error);
        })
});

router.post('/agents', (req, res) => {
    const { agentname, agentlastname, password, profile } = req.body;
    sequelize.query('INSERT INTO agents VALUES(null, ?, ?, ?, ?, null)', {
            replacements: [agentname, agentlastname, password, profile]
        })
        .then((agent) => {
            res.json({
                message: "agent created sucessfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/agent/:id', (req, res) => {
    const id = req.params.id;
    sequelize.query('SELECT * FROM agents WHERE idagent = ?', {
            replacements: [id]
        })
        .then((agent) => {
            res.json({
                message: agent[0]
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.put('/agent/:id', (req, res) => {
    const id = req.params.id;
    const { agentname, agentlastname, password, profile } = req.body;
    sequelize.query('UPDATE agents SET agentname = ?, agentlastname = ?, password = ?, profile = ? WHERE idagent = ?', {
            replacements: [agentname, agentlastname, password, profile, id]
        })
        .then((agent) => {
            res.json({
                message: "agent update sucessfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.delete('/agent/:id', (req, res) => {
    const id = req.params.id;
    sequelize.query('DELETE FROM agents WHERE idagent = ?', {
            replacements: [id]
        })
        .then((agent) => {
            res.json({
                message: "agent deleted sucessfully"
            });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router;