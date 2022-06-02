const express = require("express");

const employeeesRoutes = require("../controllers/employees-controller");

const router = express.Router();

router.get("/all", employeeesRoutes.employeesAll);

router.post("/create", employeeesRoutes.employeesCreate);

router.delete("/delete", employeeesRoutes.employeesDelete);

module.exports = router;
