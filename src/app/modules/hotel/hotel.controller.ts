import type { Request, Response } from 'express';

import { HotelService } from './hotel.service';
import { ApiResponse } from '../../../utils/ApiResponse';
import catchAsync from '../../../utils/catchAsync';
import status from 'http-status';

const createHotel = catchAsync(async (req: Request, res: Response) => {
  const result = await HotelService.createHotel(req.body);

  ApiResponse.success(res, result, 'Hotel created successfully', status.CREATED);
});

const getHotels = catchAsync(async (req: Request, res: Response) => {
  const result = await HotelService.getHotels();

  ApiResponse.success(res, result, 'Hotels fetched successfully', status.OK);
});

const getSingleHotel = catchAsync(async (req: Request, res: Response) => {
  const hotelId = req.params.id as string;

  const result = await HotelService.getSingleHotel(hotelId);

  ApiResponse.success(res, result, 'Hotel fetched successfully', status.OK);
});

export const HotelController = {
  createHotel,
  getHotels,
  getSingleHotel,
};
