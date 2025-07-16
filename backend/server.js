const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

// Import Sequelize instance
const sequelize = require('./config/db');

// Import routes
const apiRoutes = require('./src/routes/api');

// Middleware (add body-parser, cors, etc. here if needed)
app.use(express.json());

// Use API routes
app.use('/api', apiRoutes);

// Start server after syncing Sequelize models
const PORT = 5500;
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on PORT:${PORT}`);
    });
}).catch((err) => {
    console.error('Failed to sync database:', err);
});