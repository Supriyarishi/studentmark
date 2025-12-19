const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.post("/register", studentController.register);
router.post("/login", studentController.login);
router.get("/marks", studentController.auth, studentController.getMarks);
router.put("/marks", studentController.auth, studentController.updateMarks);

module.exports = router;
