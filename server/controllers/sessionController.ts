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
        const error = errorObject(err);
        return next(error);
      })
  },
  isLoggedIn: (req: Request, res: Response, next: NextFunction) => {
    console.log('request cookies', req.cookies)
    Session.findOne({ cookieId: req.cookies.session })
      .then((data: any) => {
        console.log('data from findOne', data)
        if (!data && res.locals.userInfo) {
          console.log('userInfo', res.locals.userInfo)
          const { _id } = res.locals.userInfo;
          // find session based on _id in db -> if none, create
          //query Session db by _id, if one exists, delete before creating a new one
          const newSession = new Session({cookieId: _id});
          console.log('newSession created', newSession)
          newSession
            .save()
            .then((newSession: object) => {
              console.log('newSession inside save', newSession)
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