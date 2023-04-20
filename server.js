require("dotenv").config();
const http = require("http");
const app = require("./app");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

const start = async () => {
  try {
    // If you want to connect your DB,
    // you can call the function here
    // Don't forget to do it asynchoronously
    // await connectDB(process.env.MONGODB_URI);
    server.listen(PORT, () => {
      console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
