// // src/server.js
// const app = require('./app');
// const mongoose = require('mongoose');
// const connectDB = require('./config/db');
// const createDemoUser = require('./seed/demo-user');

// connectDB();

// mongoose
//   .connect('mongodb://127.0.0.1:27017/diary_app')
//   .then(async () => {
//     console.log('✅ MongoDB connected');

//     await createDemoUser(); 

//     app.listen(3000, () =>
//       console.log('🚀 Backend running on http://localhost:3000')
//     );
//   })
//   .catch(err => console.error(err));

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db')


const app = express();
app.use(cors())
app.use(express.json());

connectDB();

app.use('/api/auth', require('./routes/auth.routes'));
const port = process.env.port || 3000;
app.listen(port, ()=>
console.log(`server is running on port ${port}`));


