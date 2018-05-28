// 5/26/18: Node currently does not support ES6. Babel required.
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongodb from "mongodb";

// Create app
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "dist/")));

const mLab = "mongodb://admin:pass@ds135540.mlab.com:35540/star-wars-quotes";
let db;

mongodb.MongoClient.connect(mLab, (err, client) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}

	// Save database object from callback for reuse
	db = client.db();

	console.log("Database Connection Ready");

	app.listen(4000, () => {
		console.log("App now running on port 4000");
	});
});

// Error Handler
function handleError(res, reason, message, code) {
	console.log(`ERROR: ${reason}`);
	res.status(code || 500).json({ error: message });
}

/**
 * api/
 * 	GET: returns all data
 * 	POST: posts new data
 */
app.get("/api", (req, res) => {
	db
		.collection("quotes")
		.find({})
		.toArray((err, data) => {
			if (err) {
				handleError(res, err.message, "Didn't get DB data");
			} else {
				res.status(200).json(data);
			}
		});
});

// app.listen(4000, () => {
// 	console.log("Listenting on port 4000");
// });

// Default entry point
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

// app.get("/api", (req, res) => {
// 	console.log("Oh HI API");
// 	const data = db
// 		.collection("users")
// 		.find()
// 		.toArray();
// 	console.log(data);
// 	// .then(data => {
// 	// 	console.log(data);
// 	// 	console.log("dta sent");
// 	// 	res.json(data);
// 	// });
// 	console.log("OH BYE API");
// 	res.end();
// });

// // Listen to Port 4000
