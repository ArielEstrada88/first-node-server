// index.js

const express = require("express");
const app = express();
const PORT = 3000;

const indexRoutes = require("./routes/indexRoutes");

app.use("/", indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
