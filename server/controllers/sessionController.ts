import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const Session = require('../models/sessionModel');

const errorObject = (err: ErrorRequestHandler) => {
  return {
    log: 'Error in Session Controller',
    message: { err: `Error caught: ${err}` }
  }
}

const sessionController = {
  startSession: (req: Request, res: Response, next: NextFunction) => {
    const { _id } = res.locals.userInfo;
    const newSession = new Session({cookieId: _id});
    newSession
      .save()
      .then((newSession: object) => {
        res.locals.newSession = newSession;
        return next();
      })
      .catch((err: ErrorRequestHandler) => {
        return errorObject(err);
      })
  },
  isLoggedIn: (req: Request, res: Response, next: NextFunction) => {
    Session.findOne({ cookieId: req.cookies.session })
      .then((data: any) => {
        if (!data && res.locals.userInfo) {
          const { _id } = res.locals.userInfo;
          const newSession = new Session({cookieId: _id});
          newSession
            .save()
            .then((newSession: object) => {
              res.locals.newSession = newSession;
              return next();
            })
        } else if (!data && !res.locals.userInfo) {
          res.redirect('/register');
        } else {
          return next();
        }
      })
      .catch((err: ErrorRequestHandler) => {
        return next(errorObject(err));
      })
  }
}

module.exports = sessionController