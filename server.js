const express = require("express");
const logRequest = require("./reqLog/logger"); // middleware made by me to log request from client
const fileCreate = require("./file");
const app = express();
const hostname = "localhost";
const port = 8383;

// Middleware 1 - logger/taller for our application
app.use("/", async (req, res, next) => {
  await logRequest(req);
  next();
});

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", async (req, res) => {
  const { parcel } = req.body;
  console.log(parcel);
  if (parcel === "") {
    let message = res.status(404).send({ status: "failed" });
    return message;
  } else {
    await fileCreate(parcel.fileName, parcel.fileType, parcel.content);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
