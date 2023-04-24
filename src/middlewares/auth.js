import jwt from "jsonwebtoken";
import { bearerAuthRegexp } from "../constants/auth.js";
export const checkToken = async (req, res, next) => {
  const auth = req.headers["authorization"] || "";
  const result = bearerAuthRegexp?.exec(auth);
  if (result) {
    try {
      const accessToken = result[1];
      const tokenData = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
      req["user"] = tokenData;
      if (tokenData) return next();
      else return res.status(400).send({ error: "invalid token" });
    } catch (e) {
      res.status(400).send({
        error: e,
      });
    }
  } else {
    return res.status(400).send({ error: "forbidden" });
  }
};
