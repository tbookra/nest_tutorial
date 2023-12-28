import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction } from 'express';
import { json } from 'stream/consumers';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('middleware');
    // console.log(req.headers.authorization);
    const header = JSON.stringify(req.headers);
    const parsed = JSON.parse(header);
    const { authorization } = parsed;
    console.log(authorization);
    if (!authorization)
      throw new HttpException(
        'No authorization token provided',
        HttpStatus.FORBIDDEN,
      );
    if (authorization === 'nfvfnvknv5vs7vjsvj') {
      next();
    } else {
      throw new HttpException('Invalid Token', HttpStatus.FORBIDDEN);
    }
  }
}
