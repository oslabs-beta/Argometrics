import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const cookieController = {
  sessionCookie: (req: Request, res: Response, next: NextFunction) => {
    if(res.locals.userInfo) {
      console.log(res.locals.userInfo)
      res.cookie('session', res.locals.userInfo._id, {
        httpOnly: true
      });
      return next();
    }
  }
}

module.exports = cookieController;