import mongoose from "mongoose";
const adminModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Madmin = mongoose.model("Madmin", adminModel);
export default Madmin;
