import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const cookieController = {
  sessionCookie: (req: Request, res: Response, next: NextFunction) => {
    //clear any previous session cookies
    res.clearCookie('session');

    if(res.locals.userInfo) {
      //create session cookie
      res.cookie('session', res.locals.userInfo._id, {
        httpOnly: true
      });
      return next();
    }
    const user: any = req.user
    if (user.googleId) {
      res.cookie('session', user.googleId, { httpOnly: true })
      return next()
    }
  },
  deleteSessionCookie: (req: Request, res: Response, next: NextFunction) => {
    console.log('about to delete!')
    res.clearCookie('session');
    console.log('cookie deleted!')
    return next();
  }
}

module.exports = cookieController;

