const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api", (req, res) => {
  res.json({
    name: "Bill",
    age: 56,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
