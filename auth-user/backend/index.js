import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './Routes/userRoute.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;

// Move the CORS middleware to the top before defining any routes
app.use(cors());  // This allows all origins by default

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("hello adarsh");
});

// APIs for login and signup
app.use('/api', userRoute);

// Start the server and connect to the database
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on PORT ${PORT}`);
});
