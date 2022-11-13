import mongoose from "mongoose";

export const Connection = async (URL) => {
   try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongoDB Connected Successfully");
  } catch (error) {
    console.log("Error while connecting to DB", error.message);
  }
};

export default Connection;
