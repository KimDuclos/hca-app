const knex = require("../db");

// ALL
exports.availsAll = async (res) => {
  knex
    .select("*")
    .from("avails")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json({ message: `There as an error retrieving all avails. ${err}` });
    });
};

// CREATE
exports.availsCreate = async (req, res) => {
  knex("avails")
    .insert({
      sunday: req.body.sunday,
      monday: req.body.monday,
      tuesday: req.body.tuesday,
      wednesday: req.body.wednesday,
      thursday: req.body.thursday,
      friday: req.body.friday,
      saturday: req.body.saturday,
    })
    .then(() => {
      res.json({
        message: `Availability created.`,
      });
      console.log("");
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating availability.`,
      });
    });
};

// UPDATE
exports.availsUpdate = async (req, res) => {
  knex("avails")
    .where("id", req.body.id)
    .update({
      sunday: req.body.sunday,
      monday: req.body.monday,
      tuesday: req.body.tuesday,
      wednesday: req.body.wednesday,
      thursday: req.body.thursday,
      friday: req.body.friday,
      saturday: req.body.saturday,
    })
    .catch((err) => {
      res.json({
        message: `There was an error updating ${req.body.id} : ${err}`,
      });
    });
};

// DELETE
exports.availsDelete = async (req, res) => {
  knex("avails")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Availability ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({
        message: `There was an error deleting ${req.body.id} : ${err}`,
      });
    });
};
