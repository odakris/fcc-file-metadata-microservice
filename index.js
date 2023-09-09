const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const apiFileRoutes = require("./server/routes/apiFileRoutes");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./client/public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/client/views/index.html");
});

// Mount routes
app.use("/", apiFileRoutes);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
