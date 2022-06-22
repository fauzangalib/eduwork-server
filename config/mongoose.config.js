const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const db = process.env.MONGO

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("Koneksi Tersambung ke Mongoose"))
  .catch((err) => console.log(err));
