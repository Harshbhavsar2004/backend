import express from 'express';
import { registerUser, loginUser, validateToken, sendUserInfo, getUserInfo, getAllUsers, updateUserRole } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/get-user-info', validateToken, getUserInfo);
router.get('/', getAllUsers);
router.put('/:id', updateUserRole);
router.get('/all-users', getAllUsers);

export default router; 