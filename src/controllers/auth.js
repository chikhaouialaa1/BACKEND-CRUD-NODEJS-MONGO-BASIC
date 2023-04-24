import Madmin from "../models/admins.js";
import {
  encryptPassword,
  decryptPassword,
  generateToken,
} from "../utils/auth.js";

export const signin = [
  async (req, res) => {
    const { email, password } = req.body;
    const admin = await Madmin.findOne({ email });
    const isAuthenticated = await decryptPassword(password, admin.password);
    if (isAuthenticated) {
      let tokenData = {
        adminId: admin._id,
        email: admin.email,
      };
      const token = await generateToken(tokenData);
      res.status(200).send({
        accesstoken: token,
      });
    } else {
      res.status(400).send({
        error: "forbidden",
      });
    }
  },
];

export const register = [
  async (req, res) => {
    const { username, password, email } = req.body;
    const oldAccounts = await Madmin.find({ email });
    if (oldAccounts.length < 1) {
      const cryptedPassword = encryptPassword(password);
      try {
        const admin = await Madmin.create({
          username,
          password: cryptedPassword,
          email,
        });
        res.status(200).send("admin created successfully");
      } catch (e) {
        res.send({ error: e });
      }
    } else {
      res.status(200).send({ error: "Account seems exist" });
    }
  },
];
