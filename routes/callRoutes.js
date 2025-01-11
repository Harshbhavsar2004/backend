import express from 'express';
import { getDailyCalls } from '../controllers/callController.js';

const router = express.Router();

router.get('/daily-calls', getDailyCalls);

export default router; 