const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");

const employeesRouter = require("./routes/employees-route");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("General Error 500");
});

app.use((req, res, next) => {
  res.status(400).send("404 Not Found");
});

app.listen(PORT, function () {
  console.log(`Express server running on: ${PORT}`);
});
