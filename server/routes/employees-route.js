const express = require("express");

const employeeesRoutes = require("../controllers/employees-controller");

const router = express.Router();

router.get("/all", employeeesRoutes.employeesAll);

router.post("/create", employeeesRoutes.employeesAll);

router.put("/update", employeeesRoutes.employeesAll);

router.delete("/delete", employeeesRoutes.employeesAll);

module.exports = router;
