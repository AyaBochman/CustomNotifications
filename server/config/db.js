const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(`process ${process.env.MONGO_URI}`.bgGreen)
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected! host:${conn.connection.host}`);
};

module.exports = connectDB;
