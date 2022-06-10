const path = require("path");

const dbPath = path.resolve(__dirname, "./db/database.sqlite");

const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

// EMPLOYEES
knex.schema
  .hasTable("employees")
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
          console.err(
            `There was an error creating the employees database: ${err}`
          );
        });
    }
  })
  .then(() => {
    console.log("Done creating databases.");
  })
  .catch(() => {
    console.error(`There was an error creating the databases ${err}`);
  });

// AVAILABILITY
knex.schema.hasTable("avails").then((exists) => {
  if (!exists) {
    return knex.schema
      .createTable("avails", (table) => {
        table.integer("id").primary();
        table.string("sunday");
        table.string("monday");
        table.string("tuesday");
        table.string("wednesday");
        table.string("thursday");
        table.string("friday");
        table.string("saturday");
      })
      .then(() => {
        console.log("Availability Table Created");
      })
      .catch((err) => {
        console.err(
          `There was an error creating the availability database: ${err}`
        );
      });
  }
});

knex
  .select("*")
  .from("employees")
  .then((data) => console.log("data:", data))
  .catch((err) => console.log(err));

knex
  .select("*")
  .from("avails")
  .then((data) => console.log("data", data))
  .catch((err) => console.log(err));

module.exports = knex;
