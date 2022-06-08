const express = require("express");

// AVAILS
const availsRoutes = require("../controllers/avails-controllers");

const router = express.Router();

router.get("/all", availsRoutes.availsAll);

router.post("/create", availsRoutes.availsCreate);

router.put("/update", availsRoutes.availsUpdate);

router.delete("/delete", availsRoutes.availsDelete);

module.exports = router;