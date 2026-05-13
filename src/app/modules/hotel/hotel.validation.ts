import z from 'zod';

const createHotelValidation = z.object({
  name: z.string().min(1, 'Hotel name is required'),
  city: z.string().min(1, 'City is required'),
  address: z.string().min(1, 'Address is required'),
});

export const HotelValidation = {
  createHotelValidation,
};