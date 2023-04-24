import Musers from "../models/users.js";

export const read = [
  async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await Musers.findOne({ _id });
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(200).send({ message: "user seems not exist" });
      }
    } catch (e) {
      res.status(200).send({ message: "user seems not exist", error: e });
    }
  },
];

export const list = [
  async (req, res) => {
    try {
      const users = await Musers.find({});
      res.status(200).send(users);
    } catch (e) {
      res.status(200).send({ message: "error fetching users", error: e });
    }
  },
];

export const update = [
  async (req, res) => {
    const { _id } = req.params;
    const { username, password, role } = req.body;
    const user = await Musers.findOne({ _id: _id });
    try {
      await Musers.updateOne(
        { _id },
        {
          username: username ? username : user.username,
          password: password ? password : user.password,
          role: role ? role : user.role,
        }
      );
      res.status(200).send("user updated successfully");
    } catch (e) {
      res.send({ error: e });
    }
  },
];

export const create = [
  async (req, res) => {
    const { username, password, role } = req.body;
    try {
      const user = await Musers.create({ username, password, role });
      res.status(200).send("user created successfully");
    } catch (e) {
      res.send({ error: e });
    }
  },
];

export const _delete = [
  async (req, res) => {
    const { _id } = req.params;
    try {
      const user = await Musers.deleteOne({ _id });
      res.status(200).send("user deleted successfully");
    } catch (e) {
      res.send({ error: e });
    }
  },
];
