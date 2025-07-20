const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Import Sequelize instance
const sequelize = require('./config/db');

// Import middleware
const auth = require('./src/middleware/authMiddleware');

// Import routes
const apiRoutes = require('./src/routes/api');
const authRoutes = require('./src/routes/authRoutes');

// Middleware
app.use(express.json());

// Public routes (no authentication required)
app.use('/api/auth', authRoutes);

// Protected routes (authentication required)
app.use('/api', auth(), apiRoutes);

// Define PORT
const PORT = process.env.PORT || 5500;

// Start server after syncing Sequelize models
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to sync database:', err);
});