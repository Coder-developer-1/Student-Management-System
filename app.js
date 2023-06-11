const express = require("express");

const app = express();

app.get("/" , async (req,res) => {
    res.send("Ganpati bappa Morya ki jai")
});

// App listening on port  8000

app.listen(8000 , ()=> {
    console.log("server has been started");
});
