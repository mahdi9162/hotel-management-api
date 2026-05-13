import { Router } from 'express';

import validateRequest from '../../middleware/validateSchema';
import { RoomController } from './room.controller';
import { RoomValidation } from './room.validation';

const router: Router = Router();

router.post('/create-room', validateRequest(RoomValidation.createRoomValidation), RoomController.createRoom);

router.get('/', RoomController.getRooms);

router.get('/:id', RoomController.getSingleRoom);

export const RoomRoutes = router;
