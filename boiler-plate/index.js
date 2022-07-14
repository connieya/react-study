const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pgh:1234@cluster0.ww4o2.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParse: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndmodify: false,
    }
  )
  .then(() => console.log("mongo db connected"))
  .catch((err) => console.log("err = ", err));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
