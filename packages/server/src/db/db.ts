const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://jcamden:ptSW13DVdOLJv0MK@djinndex-ohs7j.gcp.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("Server connected to MongoDB cluster...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
