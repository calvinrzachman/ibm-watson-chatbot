// Create an instance of Watson Assistant
const watson = require("watson-developer-cloud");
const config = require("./config");

const assistant = new watson.AssistantV1({
  iam_apikey: config.iam_apikey,
  version: config.version,
  url: config.url
});

module.exports = assistant;
