import Consultation from '../models/Consultation.js';
import Contact from '../models/Contact.js';

export const getDailyCalls = async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  try {
    const consultationsToday = await Consultation.countDocuments({
      createdAt: { $gte: today, $lt: tomorrow }
    });

    const contactsToday = await Contact.countDocuments({
      createdAt: { $gte: today, $lt: tomorrow }
    });

    res.json({ dailyConsultations: consultationsToday, dailyContacts: contactsToday });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching daily calls', error: error.message });
  }
}; 