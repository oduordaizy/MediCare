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

// Debug middleware to log all requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - Body:`, req.body);
    next();
});

// Public routes (no authentication required)
app.use('/api/auth', authRoutes);

// Protected routes (authentication required)
app.use('/api/users', auth(['patient', 'doctor', 'admin']), apiRoutes);

app.get('/', (req, res)=>{
    res.send("Hello there, this is for testing purposes")
})

// Simple test endpoint without any middleware
app.get('/test', (req, res) => {
    res.json({ message: 'Test endpoint works!' });
});

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