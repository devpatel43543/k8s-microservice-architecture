const express = require("express");
const dotenv = require("dotenv").config();

const fileRoutes = require("./routes/fileRoutes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use("/", fileRoutes);

app.listen(PORT, () => {
  console.log(`Container 2 listening on port ${PORT}`);
});
