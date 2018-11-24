// Define Express Route Handlers

// Create Middlware/Interceptor

module.exports = function(app) {
  // Function takes an app and defines routes
  app.get("/", (req, res, next) => {
    // The ordering of arguments specifies the order in which callbacks are called: 1. (req, res, next)
    res.send("Hello, Calvin");
  });
};

// The `app` object represents the underlying express server and its associated Route Handlers.
// The call `app.get()` creates a new route handler watching for incoming HTTP GET requests
// More specifically it watches for requests to "/"

// `req` is an object representing incoming request
// `res` is an object representing the response
// `next` is for error handling
