const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const app = express();

app.use(cors())

// Import Sequelize instance
const sequelize = require('./config/db');
const jwtSecret = process.env.JWT_SECRET;

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
app.use('/api/users', auth(), apiRoutes);

app.get('/', (req, res)=>{
    res.send("Hello there, this is for testing purposes")
})

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server after syncing Sequelize models
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to sync database:', err);
});