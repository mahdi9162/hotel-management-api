import type { TAuthChangePassword, TAuthPayload } from '../../../types';

// register
const register = async (payload: TAuthPayload) => {
  return {
    user: {
      email: payload.email,
    },
    message: 'Register service working',
  };
};

// login
const login = async (payload: TAuthPayload) => {
  const isUserExist = true;

  if (!isUserExist) {
    throw new Error('User not found');
  }

  return {
    user: {
      email: payload.email,
    },
    token: 'fake-jwt-token',
  };
};

// change password
const changePassword = async (payload: TAuthChangePassword) => {
  const isOldPasswordCorrect = true;

  if (!isOldPasswordCorrect) {
    throw new Error('Old password is incorrect');
  }

  return {
    user: {
      email: payload.email,
    },
    message: 'Password changed successfully',
  };
};

export const AuthService = {
  register,
  login,
  changePassword,
};
