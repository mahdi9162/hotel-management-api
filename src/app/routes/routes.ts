import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { HotelRoutes } from '../modules/hotel/hotel.route';
import { RoomRoutes } from '../modules/room/room.route';

const router: Router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/hotels',
    route: HotelRoutes,
  },
  {
    path: '/rooms',
    route: RoomRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export const AppRoutes = router;
