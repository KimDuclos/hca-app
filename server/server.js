const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const employeesRouter = require("./routes/employees-routes");
const availsRouter = require("./routes/avails-routes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// EMPLOYEES
app.use("/employees", employeesRouter);
app.use("/avails", availsRouter);

app.use((err, res) => {
  console.err(err.stack);
  res.status(500).send("General Error 500");
});

app.use((res) => {
  res.status(400).send("404 Not Found");
});

app.listen(PORT, function () {
  console.log(`Express server running on: ${PORT}`);
});