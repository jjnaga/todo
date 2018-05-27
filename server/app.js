// 5/26/18: Node currently does not support ES6. Babel required.
import express from "express";
import path from "path";

// Create app
const app = express();

// Use dist (Where our finished product is)
app.use(express.static(path.join(__dirname, "..", "dist/")));

// Default entry point
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.get("/bundle.js", (req, res) => {
	res.sendFile("bundle.js");
});

// Listen to Port 4000
app.listen(4000, () => console.log("Listening on port 4000 :D "));
