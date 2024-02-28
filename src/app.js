import express from 'express';
import router from './routes.js';
import 'dotenv/config'

const app = express();

app.use(express.json())

app.use(router)

export default app

