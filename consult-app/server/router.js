const express = require('express');
const router = express.Router();
const controller = require('./controllers/doctors.controllers.js');

router.get("/home", controller.getDoctors);

module.exports = router;