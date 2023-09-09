const express = require("express");
const router = express.Router();
const multer = require("multer");
// Set destination dir
const upload = multer({ dest: "uploads/" });

// Controllers
const { uploadFile } = require("../controllers/fileController");

// upload.single('upfile') target the input file in html
router.route("/api/fileanalyse").post(upload.single("upfile"), uploadFile);

// https://www.npmjs.com/package/multer

module.exports = router;
