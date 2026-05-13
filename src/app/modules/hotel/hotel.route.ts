import { Router } from 'express';

import validateRequest from '../../middleware/validateSchema';
import { HotelController } from './hotel.controller';
import { HotelValidation } from './hotel.validation';

const router: Router = Router();

router.post('/create-hotel', validateRequest(HotelValidation.createHotelValidation), HotelController.createHotel);

router.get('/', HotelController.getHotels);

router.get('/:id', HotelController.getSingleHotel);

export const HotelRoutes = router;
