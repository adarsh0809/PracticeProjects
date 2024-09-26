import express from 'express';
import { signup } from '../Controlers/signup.js';
import { login } from '../Controlers/login.js';

const router = express.Router();

router.route('/login').post(login);
router.route('/signup').post(signup);


export default router;