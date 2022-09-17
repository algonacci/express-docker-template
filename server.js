const express = require("express");
const cors = require("cors");

app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Success", status_code: 200 });
});
