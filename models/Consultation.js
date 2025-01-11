import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  whatsappNumber: { type: String, required: true },
  monthlyBill: { type: String, required: true },
  pincode: { type: String, required: true },
  city: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true }, // 'homes' or 'commercial'
}, { timestamps: true });

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation; 