const express = require("express");

// EMPLOYEES
const employeesRoutes = require("../controllers/employees-controllers");

const router = express.Router();

router.get("/all", employeesRoutes.employeesAll);

router.post("/create", employeesRoutes.employeesCreate);

router.put("/update", employeesRoutes.employeesUpdate);

router.delete("/delete", employeesRoutes.employeesDelete);


module.exports = router;
