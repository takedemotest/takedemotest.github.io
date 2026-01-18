// src/server.js
const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
