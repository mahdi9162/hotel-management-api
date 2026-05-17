import type { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { ApiResponse } from '../../../utils/ApiResponse';
import catchAsync from '../../../utils/catchAsync';
import status from 'http-status';

// verify
const verify = catchAsync(async (req: Request, res: Response) => {
  const token = req.query.token as string;
  const result = await AuthService.verify({ token });

  ApiResponse.success(res, result, 'Account verified successfully', status.OK);
});

// register
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  ApiResponse.success(
    res,
    result,
    'Registration successful. Please check your email to verify your account. The verification link may also appear in your spam folder.',
    status.OK,
  );
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
  verify,
};
