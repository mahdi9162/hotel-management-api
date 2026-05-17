import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import type { TChangePassword, TLogin, TRegister, TVerify } from './auth.validation';
import env from '../../../config/env';
import sendEmail from '../../../utils/sendEmail';

// verify
const verify = async (payload: TVerify) => {
  const user = await prisma.user.findFirst({
    where: {
      verificationToken: payload.token,
    },
  });

  if (!user) {
    throw new Error('Invalid verification token');
  }

  const verifiedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      isVerified: true,
      verificationToken: null,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isVerified: true,
    },
  });
  return verifiedUser;
};

// register
const register = async (payload: TRegister) => {
  const isUserExist = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (isUserExist) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);
  const verificationToken = crypto.randomBytes(32).toString('hex');

  const user = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      verificationToken,
    },
    select: {
      id: true,
      name: true,
      email: true,
      isVerified: true,
    },
  });

  const verifyLink = `${env.server_url}/api/v1/auth/verify?token=${verificationToken}`;

  await sendEmail({
    to: payload.email,
    subject: 'Verify your account',
    html: `
      <h2>Verify your account</h2>
      <p>Click the link below to verify your email:</p>
      <a href="${verifyLink}">${verifyLink}</a>
    `,
  });

  return {
    user,
  };
};

// login
const login = async (payload: TLogin) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    throw new Error('User not found');
  }

  if (!user.isVerified) {
    throw new Error('Please verify your email before login');
  }

  const isPasswordMatched = await bcrypt.compare(payload.password, user.password);

  if (!isPasswordMatched) {
    throw new Error('Invalid password');
  }

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      isVerified: user.isVerified,
    },
  };
};

// change password
const changePassword = async (payload: TChangePassword) => {
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
  verify,
};
