const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/media", (req, res) => {
  sequelize
    .query("SELECT * FROM social_media", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((media) => {
      res.json({
        message: media,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/media", (req, res) => {
  const {
    idusersocial,
    email,
    typeaccount,
    username,
    passccount,
    status,
    comments,
    phone,
    revision,
  } = req.body;
  sequelize
    .query(
      "INSERT INTO social_media VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?, null)",
      {
        replacements: [
          idusersocial,
          email,
          typeaccount,
          username,
          passccount,
          status,
          comments,
          phone,
          revision,
        ],
      }
    )
    .then((media) => {
      res.json({
        message: "media created sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/media/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query("SELECT * FROM social_media WHERE idusersocial = ?", {
      replacements: [id],
    })
    .then((media) => {
      res.json({
        message: media[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/media/:id/:social", (req, res) => {
  const id = req.params.id;
  const social = req.params.social;
  sequelize
    .query(
      "SELECT * FROM social_media WHERE idusersocial = ? AND typeaccount = ?",
      {
        replacements: [id, social],
      }
    )
    .then((media) => {
      res.json({
        message: media[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.put("/media/:id/:social", (req, res) => {
  const id = req.params.id;
  const social = req.params.social;
  const {
    idusersocial,
    email,
    typeaccount,
    username,
    passccount,
    status,
    comments,
    phone,
    revision,
  } = req.body;
  sequelize
    .query(
      "UPDATE social_media SET idusersocial = ?, email = ?, typeaccount = ?, username = ?, passccount = ?, status = ?, comments = ?, phone = ?, revision = ? WHERE idusersocial = ? AND typeaccount = ?",
      {
        replacements: [
          idusersocial,
          email,
          typeaccount,
          username,
          passccount,
          status,
          comments,
          phone,
          revision,
          id,
          social,
        ],
      }
    )
    .then((media) => {
      res.json({
        message: "media update sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/media/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query("DELETE FROM social_media WHERE idmedia = ?", {
      replacements: [id],
    })
    .then((media) => {
      res.json({
        message: "media deleted sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
