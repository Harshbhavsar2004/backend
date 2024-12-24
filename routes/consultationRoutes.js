import express from 'express';
import { getAllConsultations, submitConsultation, deleteConsultation } from '../controllers/consultationController.js';

const router = express.Router();

router.get('/', getAllConsultations);
router.post('/submit', submitConsultation);
router.delete('/:id', deleteConsultation);

export default router;