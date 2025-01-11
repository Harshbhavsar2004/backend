import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true }
});

// Create the JobApplication model
const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

export default JobApplication; // Use ES module export 