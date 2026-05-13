import z from 'zod';

const createRoomValidation = z.object({
  hotelId: z.string().min(1, 'Hotel id is required'),
  roomNumber: z.string().min(1, 'Room number is required'),
  roomType: z.string().min(1, 'Room type is required'),
  price: z.number().positive('Price must be positive'),
});

export const RoomValidation = {
  createRoomValidation,
};
