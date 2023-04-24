import mongoose from "mongoose";
const usersModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: Number,
    required: true,
  },
});
const Muser = mongoose.model("Muser", usersModel);
export default Muser;
