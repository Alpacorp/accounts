const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/phones/:phone", (req, res) => {
  const phone = req.params.phone;
  sequelize
    .query("SELECT * FROM social_media WHERE phone = ?", {
      replacements: [phone],
    })
    .then((users) => {
      res.json({
        data: users[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
