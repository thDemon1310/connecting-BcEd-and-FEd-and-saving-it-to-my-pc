# This is the Library to log request from different Ip

## How to use it?
1) Extract requestLogger.zip
2) Copy logger.js to your folder.
3) import logger
    - for common JS
    <pre> const logRequest = require("./logger"); </pre>    
    1)c&p on top of your server code
    2) **Important** "./logger is the path of logger.js" 
        - If you have stored logger.js elsewere the puts that path there
4) Make a middleware above every .use module
    - past this code
<pre>
// Middleware 1 - logger/taller for our application
app.use("/", async (req, res, next) => {
  await logRequest(req);
  next();
});
</pre>
   
