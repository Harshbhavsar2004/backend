import express from 'express';
import { saveContact, getContacts } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', saveContact);
router.get('/getcontacts', getContacts);

export default router; 