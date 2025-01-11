import express from 'express';
import { submitApplication, getJobApplications } from '../controllers/jobApplicationController.js';

const jobApplicationRoutes = express.Router();

// Route to submit job applications
jobApplicationRoutes.post('/submit', submitApplication);
jobApplicationRoutes.get('/', getJobApplications);

export default jobApplicationRoutes; 