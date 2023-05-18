import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
const User = require('../models/userModel')
const bcrypt = require('bcryptjs')

const errorObject = (err: ErrorRequestHandler) => {
  return {
    log: 'Error in User Controller',
    message: { err: `Error caught: ${err}` }
  }
}

const userController = {

  // general user auth
  getUser: (req: Request, res: Response, next: NextFunction) => {
      // check db for user based on user id 
      const { username, password } = req.body;
      // console.log('userController.getuser', password)
      User.find({ username }).exec()
        // fix any type !! 
        .then((user: any[]) => {
          // if (!user) throw new Error('error finding user in database')
          // console.log('user', user)
          // verify username and password hash match db
          const hashedPassword = user[0].password;

          bcrypt.compare(password, hashedPassword)
            .then((match: boolean) => {
              if (match) {
                res.locals.userInfo = user[0];
                return next();
              }
            })
            .catch((err: ErrorRequestHandler) => {
              return next({
                log: 'userController.getUser caught error',
                message: { err: `Error in verifying password: ${err}` }
              })
            })
        })
        .catch((err: ErrorRequestHandler) => {
          // create new error object for global error handler
          return next({
            log: 'userController.getUser error',
            message: { err: `Error caught in userController.getUser: ${err}` }
          })
        })
  },

  // add general user to db
  addUser: (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    // console.log('usercontroller.adduser', username, password)

    // add db check for unique username
    User.find({ username })
      .then((user: object) => {
        if (user) throw new Error('Username already exist') 
        // create user in db if no user is found
        User.create({ username, password })
          .then((user: object) => {
            res.locals.userInfo = user;
            return next()
          })
        .catch((err: ErrorRequestHandler) => {
          return next({
            log: 'userController.addUser error',
            message: { err: `Error caught creating user in userController.addUser: ${err}` }
          })
        })
      })
      .catch((err: Error) => {
        return next({
          log: 'userController.addUser error',
          message: { err: `Error caught in finding user in userController.addUser: ${err}` }
        })
      })
    
  },


  // google auth
  getGoogleUser: async (googleId: string) => {
    try {
      const user: any = await User.find({ googleId: googleId })
      return user
    }
    catch (err: any) {
      errorObject(err)
      return []
    }
  },

  // add google user to db 
  addGoogleUser: async (profile: any) => {
    const { sub, displayName } = profile
    try {
      const user: any = await User.create({ 
        googleId: sub,
        username: displayName,
        password: sub
      })
      return user
    }
    catch (err: any) {
      errorObject(err)
      return []
    }
  },



}





module.exports = userController;