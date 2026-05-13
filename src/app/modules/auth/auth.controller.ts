import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ApiResponse } from '../../../utils/ApiResponse';
import catchAsync from '../../../utils/catchAsync';
import status from 'http-status';

// register
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  ApiResponse.success(res, result, 'Register successful', status.OK);
});

// login
const login = catchAsync(async (req, res) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, 'Login successful', status.OK);
});

// change password
const changePassword = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.changePassword(req.body);

  ApiResponse.success(res, result, 'Password change successful', status.OK);
});

export const AuthController = {
  register,
  login,
  changePassword,
};
