import express from "express";
import bodyParser from "body-parser";
import { dbConnection } from "./src/config/databse.js";
import userRouter from "./src/routes/users.js";
import authRouter from "./src/routes/auth.js";
import { checkToken } from "./src/middlewares/auth.js";

const app = express();
app.use(bodyParser.json());
const DB = dbConnection();

app.get("/ping", (req, res) => {
  res.send("OK");
});

app.use("/auth", authRouter);
app.use("/users", checkToken, userRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is runing on port ${process.env.PORT}`);
});
