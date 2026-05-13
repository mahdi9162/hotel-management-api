import type { Request, Response } from 'express';

import { RoomService } from './room.service';
import { ApiResponse } from '../../../utils/ApiResponse';
import catchAsync from '../../../utils/catchAsync';
import status from 'http-status';

const createRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.createRoom(req.body);

  ApiResponse.success(res, result, 'Room created successfully', status.CREATED);
});

const getRooms = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getRooms();

  ApiResponse.success(res, result, 'Rooms fetched successfully', status.OK);
});

const getSingleRoom = catchAsync(async (req: Request, res: Response) => {
  const hotelId = req.params.id as string;

  const result = await RoomService.getSingleRoom(hotelId);

  ApiResponse.success(res, result, 'Room fetched successfully', status.OK);
});

export const RoomController = {
  createRoom,
  getRooms,
  getSingleRoom,
};
