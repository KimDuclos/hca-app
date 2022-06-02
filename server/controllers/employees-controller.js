const knex = require("./../db");

// ALL
exports.employeesAll = async (req, res) => {
  knex
    .select("*")
    .from("employees")
    .then((userData) => {
      res.json(userData);
    })
    .catch((err) => {
      res.json({ message: `There as an error retrieving all employeees.` });
    });
};

// CREATE
exports.employeesCreate = async (req, res) => {
  knex("employees")
    .insert({
      "name": req.body.name,
      "email": req.body.email,
    })
    .then(() => {
      res.json({
        message: `Employee ${req.body.name} created.`,
      });
    })
    .catch((err) => {
      res.json({
        message: `There was an error creating employee: ${req.body.name}`,
      });
    });
};

// DELETE
exports.employeesDelete = async (req, res) => {
  knex("employees")
    .where("id", req.body.id)
    .del()
    .then(() => {
      res.json({ message: `Book ${req.body.id} deleted.` });
    })
    .catch((err) => {
      res.json({ message: `There was an error deleting ${req.body.id} : ${err}` });
    });
};