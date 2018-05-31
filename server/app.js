// 5/26/18: Node currently does not support ES6. Babel required.
// Used https://goo.gl/zgQtGV to learn all this.
// https://goo.gl/oWXwto: Useful for learning fetch()
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

// Default entry point
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

/**
 * api/
 * 	GET: returns all Todos
 * 	POST: creates a new Todo
 */
app.get("/api/today", (req, res) => {
	// TODO: Get this to only return today's todos
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

app.post("/api", (req, res) => {
	console.log("POSTING TO /API: ", req.body);
	const newTodo = req.body;
	newTodo.createDate = new Date();

	db.collection("quotes").insertOne(newTodo, (err, doc) => {
		if (err) {
			handleError(res, err.message, "Failed to create Todo");
		} else {
			res.status(201).json(doc.ops[0]);
		}
	});
});
