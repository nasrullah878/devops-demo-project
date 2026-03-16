const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
    res.send("Hello from DevOps CI/CD Pipeline 🚀");
});

app.get("/health", (req, res) => {
    res.json({status:"OK"});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
