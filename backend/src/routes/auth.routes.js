import express from 'express';
import  protectRoute  from './../middlewares/protectRoute.js';
import { RegisterController, LoginController, LogoutController } from './../controllers/authController.js';
const router = express.Router();

router.post('/register',protectRoute,RegisterController);
router.post('/login',protectRoute,LoginController);
router.get('/logout',protectRoute,LogoutController);

export default router;
