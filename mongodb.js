const { MongoClient } = require("mongodb");

// Connection URI
// const uri = "mongodb+srv://sample-hostname:27017/?maxPoolSize=20&w=majority";
const uri = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
	try {
		await client.connect();

		// Establish and verify connection
		const db = client.db(dbName);
		db.collection("users").insertOne({
			name: "123",
			age: 456,
		});

		await client.db("admin").command({ ping: 1 });
		console.log("Connected successfully to server");
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);
