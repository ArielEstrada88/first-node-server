// routes/indexRoutes.js

const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

// Route for the home page
router.get("/", indexController.getHome);

// Route for Tooele Tech
router.get("/ttech", indexController.getTTech);

module.exports = router;
