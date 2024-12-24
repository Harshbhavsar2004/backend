import Consultation from '../models/Consultation.js';

export const submitConsultation = async (req, res) => {
  const { fullName, whatsappNumber, monthlyBill, pincode, city, email, type } = req.body;

  try {
    const newConsultation = new Consultation({
      fullName,
      whatsappNumber,
      monthlyBill,
      pincode,
      city,
      email,
      type
    });

    await newConsultation.save();
    res.status(201).json({ message: 'Consultation submitted successfully' });
  } catch (error) {
    console.error('Failed to submit consultation:', error);
    res.status(500).json({ message: 'Failed to submit consultation', error: error.message });
  }
};

export const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find({});
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching consultations', error: error.message });
  }
};

export const deleteConsultation = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedConsultation = await Consultation.findByIdAndDelete(id);
    if (!deletedConsultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }
    res.status(200).json({ message: 'Consultation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting consultation', error: error.message });
  }
}; 