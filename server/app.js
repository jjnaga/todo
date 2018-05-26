import express from "express";

// Create app
const app = express();

// Default entry point
app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Listen to Port 4000
app.listen(4000, () => console.log("Listening on port 4000 :D "));
