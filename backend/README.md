# Backend Structure

This backend uses a modular structure:

- `src/controllers/` — Route handler logic
- `src/routes/` — Express route definitions
- `config/` — Database and environment config
- `server.js` — Entry point

## Running the Backend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up your `.env` file with database credentials.
3. Start the server:
   ```bash
   node server.js
   ```

API endpoints are now under `/api` (e.g., `/api/patients`). 