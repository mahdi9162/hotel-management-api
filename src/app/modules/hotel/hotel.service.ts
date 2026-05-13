import { hotels } from '../../../data/hotel.data';
import type { THotelPayload } from '../../../types';

// create
const createHotel = async (payload: THotelPayload) => {
  return {
    id: 'hotel-001',
    ...payload,
  };
};

// get all
const getHotels = async () => {
  return hotels;
};

// get single
const getSingleHotel = async (id: string) => {
  const hotel = hotels.find((item) => item.id === id);

  if (!hotel) {
    throw new Error('Hotel not found');
  }

  return hotel;
};

export const HotelService = {
  createHotel,
  getHotels,
  getSingleHotel,
};
