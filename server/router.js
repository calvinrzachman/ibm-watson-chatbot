// Define Express Route Handlers
// Create Middlware/Interceptor (if needed)

const assistant = require("./assistant");
const config = require("./config");

module.exports = function(app) {
  // Function takes an app and defines routes
  app.get("/", (req, res, next) => {
    // The ordering of arguments specifies the order in which callbacks are called: 1. (req, res, next)
    res.send("Hello, Calvin");
  });

  app.put("/", (req, res, next) => {
    const { userInput } = req.body;
    assistant.message(
      {
        // workspace_id: config.demo_workspace_id,
        workspace_id: config.my_workspace_id,
        input: { text: userInput }
      },
      function(err, response) {
        if (err) console.log("error:", err);
        else console.log(JSON.stringify(response, null, 2));
        res.send(response);
      }
    );
  });
};

// The `app` object represents the underlying express server and its associated Route Handlers.
// The call `app.get()` creates a new route handler watching for incoming HTTP GET requests
// More specifically it watches for requests to "/"

// `req` is an object representing incoming request
// `res` is an object representing the response
// `next` is for error handling
