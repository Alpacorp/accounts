const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/mentions", (req, res) => {
  sequelize
    .query("SELECT * FROM mentions ORDER BY idmention DESC", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((mention) => {
      res.json({
        message: mention,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/mentionscount/:iduserment/:typeaccment", (req, res) => {
  const iduserment = req.params.iduserment;
  const typeaccment = req.params.typeaccment;
  sequelize
    .query(
      'SELECT CONCAT(iduserment, " ", typeaccment, " ", date_format(creation, "%d")) FROM mentions WHERE iduserment = ? AND date_format(now(), "%d") = date_format(date, "%d") AND typeaccment = ?',
      {
        type: sequelize.QueryTypes.SELECT,
        replacements: [iduserment, typeaccment],
      }
    )
    .then((mention) => {
      res.send(mention);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/mentions", (req, res) => {
  const { iduserment, typeaccment, urlment, campain } = req.body;
  sequelize
    .query("INSERT INTO mentions VALUES(null, ?, ?, ?, ?, null, now())", {
      replacements: [iduserment, typeaccment, urlment, campain],
    })
    .then((mention) => {
      res.json({
        message: "mention created sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/mention/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query(
      "SELECT * FROM mentions WHERE iduserment = ? ORDER BY idmention DESC",
      {
        replacements: [id],
      }
    )
    .then((mention) => {
      res.send(mention[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put("/mention/:id", (req, res) => {
  const id = req.params.id;
  const { iduserment, typeaccment, urlment, campain } = req.body;
  sequelize
    .query(
      "UPDATE mentions SET iduserment = ?, typeaccment = ?, urlment = ?, campain = ? WHERE idmention = ?",
      {
        replacements: [iduserment, typeaccment, urlment, campain, id],
      }
    )
    .then((mention) => {
      res.json({
        message: "mention update sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/mention/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query("DELETE FROM mentions WHERE idmention = ?", {
      replacements: [id],
    })
    .then((mention) => {
      res.json({
        message: "mention deleted sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
