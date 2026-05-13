import type { NextFunction, Request, Response } from 'express';
import status from 'http-status';

import { ApiResponse } from '../../utils/ApiResponse';

const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  ApiResponse.error(res, error.message || 'Something went wrong', status.INTERNAL_SERVER_ERROR);
};

export default globalErrorHandler;
