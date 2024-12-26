import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import Consultationrouter from './routes/consultationRoutes.js';
dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://mittal-frontend-1.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running');
});

mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/consultations', Consultationrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
