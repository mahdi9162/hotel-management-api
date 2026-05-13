export type TApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type TAuthPayload = {
  email: string;
  password: string;
};

export type TAuthChangePassword = {
  email: string;
  oldPassword: string;
  newPassword: string;
};

export type THotelPayload = {
  name: string;
  city: string;
  address: string;
};

export type TRoomPayload = {
  hotelId: string;
  roomNumber: string;
  roomType: string;
  price: number;
};