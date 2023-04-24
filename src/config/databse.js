import mongoose from "mongoose";
export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("database connected succefully"))
    .catch((e) => {
      console.log("unable to connect to the datbase, error :", e);
    });
};
