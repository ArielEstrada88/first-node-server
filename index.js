const express = require("express");
const app = express();
const PORT = 3000;
// Root Endpoint(HOME Endpoint)
app.get("/", (req, res) => {
    res.send("Goofy Rooster!");
});
//Route
 
app.listen(3000, () => {
 console.log(`Test server running on port: ${PORT}`);
});