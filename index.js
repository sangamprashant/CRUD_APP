require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import the cors middleware
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const path = require("path");

app.use(express.json());

const mongoose = require("mongoose");

app.use("/api/admin",require("./route/user") );
app.use("/api/product",require("./route/product") );
app.use("/api/send",require("./route/email") );

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.MONGO_DATABASE,
});

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB`);
});

mongoose.connection.on("error", (err) => {
  console.error(`Failed to connect to MongoDB: ${err}`);
});

// Serve the frontend
app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});