import z from 'zod';

// register
const registerValidation = z.object({
  email: z.email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// login
const loginValidation = z.object({
  email: z.email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// change password
const changePasswordValidation = z.object({
  email: z.email(),
  oldPassword: z.string().min(6, 'Old password must be at least 6 characters'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
});

export const AuthValidation = {
  registerValidation,
  loginValidation,
  changePasswordValidation,
};
