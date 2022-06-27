if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express from "express";
import { AppRouter } from "./routes";

import { Database } from "../database";

const app = express();

// Check database connection
(async () => {
    require('./models/associations');
    await Database.authenticate();
    console.log('DATABASE OK');
})();

app.use(express.json());
app.use(AppRouter);

const appPort = process.env.APP_PORT || '3000';
app.listen(appPort, () => {
    console.log(`APP IS RUNNING AT: http://localhost:${appPort}`);
});
