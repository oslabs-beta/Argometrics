import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
const userController = require('../controllers/userController');
const User = require('../models/userModel')

dotenv.config();

// module.exports = function(passport: any) {
  
  // function searches db for existing user based on GoogleId and
  // either returns said user info or adds them to the db
  const search = async (accessToken: string, refreshToken: string, profile: any, done: any) => {
    console.log('profile', profile)
    // verify user in db
    const checkUser = await userController.getGoogleUser(profile.sub)
    // if user exists, authenticate user
    if (checkUser.length) {
      done(null, checkUser)
    } else {
    // else add user profile and authenticate
      const id = await userController.addGoogleUser(profile)
      // need to verify this part works
      done(null, id)
    }
  }

  const strategy = new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    callbackURL: '/api/auth/google/callback',
  }, search)


  passport.use(strategy)

  // fix any type

  // each subsequent req does not contain credentials, instead a unique cookie
  // passport supports sessions through serialize and deserialize instances of sessions
  passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
    // done(null, user.id)
  })
  passport.deserializeUser((id: any, done: any) => {
    // done(null, user as false);
    User.findbyId(id, (err: Error, user: object) => done(err, user))
  })
// }
