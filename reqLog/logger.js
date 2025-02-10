const fs = require("fs/promises");
const logRequest = async (req) => {
  const timestamp = Date.now();
  const date = new Date(timestamp);
  const content = `At URL '${req.url}' on ${date.toString()} a ${
    req.method
  } request is received from ${req.ip}\n`;
    console.log(content); // Log to console
    await fs.appendFile("logs.txt", content, (err) => {
      if (err) {
        console.error("Error logging request: ", err);
      }
    });
};

module.exports = logRequest;
