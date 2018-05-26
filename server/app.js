// 5/26/18: Node currently does not support ES6. Babel required.
import express from "express";
import path from "path";

// Create app
const app = express();

// Default entry point
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Listen to Port 4000
app.listen(4000, () => console.log("Listening on port 4000 :D "));
