import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

// Connect to MongoDB

// Load environment variables from .env file
dotenv.config();

const mongoURI:string = process.env.MONGODB_URI ?? '';
mongoose.connect(mongoURI);

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
