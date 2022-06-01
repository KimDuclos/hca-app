const path = require("path");

const dbPath = path.resolve(__dirname, "db/database.sqlite");

const knex = require("knex")({
  client: "sqlite",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("books")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("employees", (table) => {
          table.increments("id").primary();
          table.string("name");
          table.string("email");
        })
        .then(() => {
          console.log("Employees Table Created");
        })
        .catch((err) => {
          console.err("There was an error creating the employees database.");
        });
    }
  })
  .then(() => {
    console.log("Done creating databases.");
  })
  .catch((error) => {
    console.error("There was an error creating the databases.");
  });

knex
  .select("*")
  .from("employees")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

module.exports = knex;
