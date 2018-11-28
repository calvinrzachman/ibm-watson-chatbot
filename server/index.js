// Main Starting Point of the Application
const express = require("express");
const http = require("http"); // Native node library
const bodyParser = require("body-parser"); // Parse requests as though it is JSON
const morgan = require("morgan"); // Logging framework
const cors = require("cors");

const app = express();
const router = require("./router");

// App Setup - Express
// Register Middleware - Incoming requests passed through these
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
app.use(cors()); // Fix CORS errors by allowing requests from other domains

router(app); // Give app access to function defined in router.js

// Server Setup - Express talks to outside world
const port = process.env.PORT || 5090;
const server = http.createServer(app); // Create an http server which forwards information to express app
server.listen(port);
console.log("Server listening on port: ", port);
