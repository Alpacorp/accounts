const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/phones", (req, res) => {
  sequelize
    .query("SELECT * FROM phones ORDER BY idphone DESC", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((phones) => {
      res.json({
        message: phones,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/phones/:phone", (req, res) => {
  const phone = req.params.phone;
  sequelize
    .query("SELECT * FROM phones WHERE number = ?", {
      replacements: [phone],
    })
    .then((phones) => {
      res.json({
        message: phones,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/phones/media/:phone", (req, res) => {
  const phone = req.params.phone;
  sequelize
    .query("SELECT * FROM social_media WHERE phone = ?", {
      replacements: [phone],
    })
    .then((users) => {
      res.json({
        message: users[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/phones", (req, res) => {
  const { number, operator, comment } = req.body;
  sequelize
    .query("INSERT INTO phones VALUES (null, ?, ?, ? null)", {
      replacements: [number, operator, comment],
    })
    .then((phone) => {
      res.json({
        message: "Phone added",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put("/phones/:id", (req, res) => {
  const id = req.params.id;
  const { number, operator, comment } = req.body;
  sequelize
    .query(
      "UPDATE phones SET number = ?, operator = ?, comment = ? WHERE idphone = ?",
      {
        replacements: [number, operator, comment, id],
      }
    )
    .then((phone) => {
      res.json({
        message: "Phone updated",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
