import mongoose from "mongoose";

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected with mongo");

  } catch (error) {
    console.log(error);
  }
})();
