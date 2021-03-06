const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const DIST_DIR = path.join(__dirname, "../build");
const HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

// @ts-ignore
app.get("/", (_req, res) => {
  res.sendFile(HTML_FILE);
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
