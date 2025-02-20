const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');

const stratagemRoutes = require ("./routes/stratagemRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.send(`Stratagem Hero API is running`);
});

app.use("/api/stratagems", stratagemRoutes);

app.get("/images/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "../public/Assets", filename);
  res.sendFile(filePath, (err) => {
    console.log("/GET ", filename);
    if (err) {
      console.error("Error sending file: ", filename, err);
      res.status(500).send("no such file");
    }
  });
});



dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;