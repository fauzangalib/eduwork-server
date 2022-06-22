const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.MONGO
const client = new MongoClient(url);

const dbName = "eduwork-ozan";

(async () => {
  try {
    await client.connect();
    console.log("Koneksi Tersambung ke MongoDB Native");
  } catch (error) {
    console.log(error);
  }
})();

const db = client.db(dbName);
module.exports = db;
