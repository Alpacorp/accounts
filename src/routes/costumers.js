const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/costumers", (req, res) => {
  sequelize
    .query("SELECT * FROM costumers ORDER BY idcostumer DESC", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((costumers) => {
      res.json({
        message: costumers,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/costumers/:idcostumer", (req, res) => {
  const idcostumer = req.params.idcostumer;
  sequelize
    .query("SELECT * FROM costumers WHERE idcostumer = ?", {
      replacements: [idcostumer],
    })
    .then((costumers) => {
      res.json({
        message: costumers[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/costumers", (req, res) => {
  const { costumer, comment } = req.body;
  sequelize
    .query("INSERT INTO costumers VALUES (null, ?, ?, null)", {
      replacements: [costumer, comment],
    })
    .then((costumer) => {
      res.json({
        message: "Costumer added",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put("/costumers/:idcostumer", (req, res) => {
  const idcostumer = req.params.idcostumer;
  const { costumer, comment } = req.body;
  sequelize
    .query("UPDATE costumers SET costumer = ?, comment = ? WHERE idcostumer = ?", {
      replacements: [costumer, comment, idcostumer],
    })
    .then((costumer) => {
      res.json({
        message: "Costumer updated",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
