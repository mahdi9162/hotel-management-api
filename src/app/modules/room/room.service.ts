import { rooms } from '../../../data/room.data';
import type { TRoomPayload } from '../../../types';

const createRoom = async (payload: TRoomPayload) => {
  return {
    id: 'room-001',
    ...payload,
  };
};

const getRooms = async () => {
  return rooms;
};

const getSingleRoom = async (id: string) => {
  const room = rooms.find((item) => item.id === id);

  if (!room) {
    throw new Error('Room not found');
  }

  return room;
};

export const RoomService = {
  createRoom,
  getRooms,
  getSingleRoom,
};
