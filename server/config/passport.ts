import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';
const userController = require('../controllers/userController');

dotenv.config();

// function searches db for existing user based on GoogleId and
// either returns said user info or adds them to the db
const search = async (accessToken: string, refreshToken: string, profile: any, done: any) => {
  console.log('profile', profile)
  // verify user in db
  const checkUser = await userController.getUser(profile.sub)
  // if user exists, authenticate user
  if (checkUser.length) {
    return done(null, checkUser)
  } else {
  // else add user profile and authenticate
    const id = await userController.addUser(profile)
    // need to verify this part works
    return done(null, id)
  }
}

const strategy = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID as string,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  callbackURL: '/auth/google/callback',
}, search)


passport.use(strategy)

// each subsequent req does not contain credentials, instead a unique cookie
// passport supports sessions through serialize and deserialize instances of sessions
passport.serializeUser((user, done) => {
  done(null, user);
  // done(null, user.id)
})
passport.deserializeUser((user, done) => {
  done(null, user as false);
  // User.findbyId(id, (err, user) => done(err, user))
})