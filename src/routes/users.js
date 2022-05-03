const express = require("express");
const router = express.Router();
const { sequelize } = require("../../database/connect");

router.get("/", (req, res) => {
  res.send("hello world accounts test 1");
  console.log("hola");
});

router.get("/users", (req, res) => {
  sequelize
    .query("SELECT * FROM users", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((users) => {
      res.json({
        message: users,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/userstable", (req, res) => {
  sequelize
    .query("SELECT * FROM users ORDER BY iduser DESC", {
      type: sequelize.QueryTypes.SELECT,
    })
    .then((users) => {
      res.json({
        message: users,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/user/media/:id", (req, res) => {
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

router.get("/user/mentions/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query("SELECT * FROM mentions WHERE iduserment = ?", {
      replacements: [id],
    })
    .then((mention) => {
      res.json({
        message: mention[0],
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/users", (req, res) => {
  const { username, lastname, gender, profile, birthdate, city, agent } =
    req.body;
  sequelize
    .query("INSERT INTO users VALUES(null, ?, ?, ?, ?, ?, ?, ?, null)", {
      replacements: [
        username,
        lastname,
        gender,
        profile,
        birthdate,
        city,
        agent,
      ],
    })
    .then((user) => {
      res.json({
        message: "user created sucessfully",
      });
      console.log(username);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = sequelize
    .query("SELECT * FROM users WHERE iduser = ?", {
      replacements: [id],
    })
    .then((user) => {
      res.json({
        message: user,
      });
    })
    .catch((error) => {
      res.send("User not exist");
      console.log(error);
    });
});

router.put("/user/:id", (req, res) => {
  const id = req.params.id;
  const { username, lastname, gender, profile, birthdate, city, agent } =
    req.body;
  sequelize
    .query(
      "UPDATE users SET username = ?, lastname = ?, gender = ?, profile = ?, birthdate = ?, city = ?, agent = ? WHERE iduser = ?",
      {
        replacements: [
          username,
          lastname,
          gender,
          profile,
          birthdate,
          city,
          agent,
          id,
        ],
      }
    )
    .then((user) => {
      res.json({
        message: "user update sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  sequelize
    .query("DELETE FROM users WHERE iduser = ?", {
      replacements: [id],
    })
    .then((user) => {
      res.json({
        message: "user deleted sucessfully",
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
