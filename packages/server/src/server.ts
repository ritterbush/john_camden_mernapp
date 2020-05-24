import express from "express";
import connectDB from "./db/db";
import { consoleLogo } from "@my-org/lib";

const cors = require("cors");

const app = express();

// Your IP is not whitelisted for my MongoDB collection.
// Change the URI in ./db/db to point to your own collection.
connectDB();

// middleware options
const customCorsOptions = {
  allowedHeaders: ["Content-Type", "x-auth-token"],
  origin: "http://localhost:3000",
  // preflightContinue: true,
};

// init middleware
app.use(cors(customCorsOptions));
app.use(express.static(__dirname + "/public"));
app.use(express.json({ extended: false, limit: "10mb" }));

// routes
app.get("/", (req, res) => res.send("Hello World!"));
app.use("/api/test", require("./routes/test"));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  consoleLogo();
  console.log(`Server is running on PORT ${PORT}...`);
});
