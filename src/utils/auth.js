import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const saltRounds = 12;
export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, process.env.SALT_ROUND);
};

export const decryptPassword = async (password, cryptedPassword) => {
  return bcrypt.compare(password, cryptedPassword);
};

export const generateToken = async (data) => {
  return jwt.sign(data, process.env.JWT_SECRET_KEY, {
    expiresIn: "2h",
  });
};
