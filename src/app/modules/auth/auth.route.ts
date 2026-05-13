import { Router } from 'express';
import validateRequest from '../../middleware/validateSchema';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';

const router: Router = Router();

// register
router.post('/register', validateRequest(AuthValidation.registerValidation), AuthController.register);
// login
router.post('/login', validateRequest(AuthValidation.loginValidation), AuthController.login);
// change pass
router.post('/change-password', validateRequest(AuthValidation.changePasswordValidation), AuthController.changePassword);
export const AuthRoutes = router;
