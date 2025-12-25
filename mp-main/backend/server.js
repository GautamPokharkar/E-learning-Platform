const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userroutes'));
app.use('/api', require('./routes/courseRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Start server
const { PORT } = require('./config/serverConfig');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const apiKey = process.env.VITE_CLERK_PUBLISHABLE_KEY;