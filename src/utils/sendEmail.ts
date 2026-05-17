import nodemailer from 'nodemailer';
import env from '../config/env';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: env.email_user,
    pass: env.email_pass,
  },
});

interface ISendEmail {
  to: string;
  subject: string;
  html: string;
}

const sendEmail = async ({ to, subject, html }: ISendEmail) => {
  const info = await transporter.sendMail({
    from: env.email_user,
    to,
    subject,
    html,
  });
  return info;
};

export default sendEmail;
