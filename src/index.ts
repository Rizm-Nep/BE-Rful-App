import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';

const app = express();
const port = 3000;

// Connect to MongoDB


mongoose.connect('mongodb://localhost:27017/nepal-tourism');

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
