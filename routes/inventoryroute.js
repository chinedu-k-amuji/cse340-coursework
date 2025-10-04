// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
// Detail view route. My week 3 assignment addition.
router.get("/detail/:invId", invController.buildDetailView);

module.exports = router;