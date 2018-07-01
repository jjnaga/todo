import express from "express";
import bodyParser from "body-parser";
import path from "path";
import mongodb from "mongodb";
/**
 *
 * 5/26/18: Node currently does not support ES6. Babel required.
 * Used https://goo.gl/zgQtGV to learn all this.
 * https://goo.gl/oWXwto: Useful for learning fetch()
 *
 *
 * "/"
 *	GET: Homepage
 *
 * "/user"
 * 	GET: Gets user data for current day.
 * 		Query:
 * 			user: user's username.
 * 			all: Returns all of the user's data.
 * 	POST: Posts users Todo to DB.
 * 		Query:
 * 			user: user's username.
 *
 *
 *
 *
 *
 */

// Create app
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "dist/")));

const mLab = "mongodb://admin:password12@ds151180.mlab.com:51180/bliss";
let db;

mongodb.MongoClient.connect(
	mLab,
	(err, client) => {
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
	},
);

// Error Handler
function handleError(res, reason, message, code) {
	console.log(`ERROR: ${reason}`);
	res.status(code || 500).json({ error: message });
}

app.get("/", (req, res) => {
	const { user } = req.query;
	console.log(`Getting User: ${user}`);

	const query = {
		user: "Jeremy",
	};
	border: "5px solid red",

	const cursor = db.collection("data").find(query);
	const today = [];
	cursor.forEach(data => {
		const time = Math.floor(Date.now() / 1000);
		const timestamp = parseInt(data._id.toString().substring(0, 8), 16);
		console.log(`${time - timestamp}`);

		// First num (1) indicates days, 24 = hour, 60 = min, 60 = sec
		if (time - timestamp < 1 * 24 * 60 * 60) {
			console.log("yay");
			console.log(typeof data);
			today.push(data);
			console.log(today);
		}
	});

	console.log(`loop finished: ${today}`);
	res.status(201).json(today);
});

/**
 * user/
 * 	GET: Retrieves Todos for current day.
 * 	POST: Create new user
 */
app.get("/user", (req, res) => {
	const { user } = req.query;
	console.log(`Getting User: ${user}`);
	db.collection("data")
		.find({ user })
		.toArray((err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
				res.status(201).json(data);
			}
		});
});

/**
 * For when we need to get all the files.
 */
app.get("/user/all");

app.post("/user", (req, res) => {
	console.log("Creating New User: ", req.body);
	const newTodo = req.body;
	db.collection("users").insertOne(newTodo, (err, doc) => {
		if (err) {
			handleError(res, err.message, "Failed to create Todo");
		} else {
			res.status(201).json(doc.ops[0]);
			console.log("Succesful:", newTodo);
		}
	});
});

/**
 * api/
 * 	GET: returns all Todos
 * 	POST: creates a new Todo
 * a45e60c09def
 */

// Default entry point
app.get("/app", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.post("/api", (req, res) => {
	console.log("app.js/API - Posting to API ", req.body);
	const newTodo = req.body;
	newTodo.createDate = new Date().toLocaleString();

	db.collection("data").insertOne(newTodo, (err, doc) => {
		if (err) {
			handleError(res, err.message, "Failed to create Todo");
		} else {
			res.status(201).json(doc.ops[0]);
		}
	});
});

app.get("/api/today", (req, res) => {
	// TODO: Get this to only return today's todos
	db.collection("data")
		.find({})
		.toArray((err, data) => {
			if (err) {
				handleError(res, err.message, "Didn't get DB data");
			} else {
				res.status(200).json(data);
			}
		});
});
