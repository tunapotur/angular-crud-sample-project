const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./database/db");

app.use(express.json());
app.use(cors());

const authRouter = require("./routers/auth.router");

app.use("/api/auth", authRouter);

connection();

const port = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  res.json({ message: "Api isteği başarılı bir şekilde çalışıyor" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
