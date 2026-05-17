import z from 'zod';

// register
const registerValidation = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// login
const loginValidation = z.object({
  email: z.email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const verifyValidation = z.object({
  token: z.string().min(1, 'Verification token is required'),
});

// change password
const changePasswordValidation = z.object({
  email: z.email('Invalid email address'),
  oldPassword: z.string().min(6, 'Old password must be at least 6 characters'),
  newPassword: z.string().min(6, 'New password must be at least 6 characters'),
});

export const AuthValidation = {
  registerValidation,
  loginValidation,
  changePasswordValidation,
  verifyValidation,
};

export type TRegister = z.infer<typeof registerValidation>;
export type TLogin = z.infer<typeof loginValidation>;

export type TChangePassword = z.infer<typeof changePasswordValidation>;
export type TVerify = z.infer<typeof verifyValidation>;
