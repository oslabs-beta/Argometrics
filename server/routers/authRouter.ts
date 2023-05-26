import express, { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import '../config/passport';
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

//checks if there is an active session and redirects to mainpage
// router.get('/checkSession', sessionController.isLoggedIn, (req: Request, res: Response)=>{
//     res.status(200).json(res.locals.sessionIsActive)
// })


// general user login
router.post('/login', userController.getUser, cookieController.sessionCookie, sessionController.endLastSession, sessionController.isLoggedIn, (req: Request, res: Response) => {
  // what to send back?
  return res.status(200).json(res.locals.userInfo)
})

// general user register
router.get('/register', userController.addUser, cookieController.sessionCookie, sessionController.endLastSession, sessionController.startSession, (req: Request, res: Response) => {
  // what to send back?
  return res.status(200).json(res.locals.userInfo);
})

// google auth login
router.get('/google', passport.authenticate('google', { scope: [ 'profile' ] }))

// google callback auth
// what endpoint to redirect upon failure? upon success? 
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
  cookieController.sessionCookie,
  (req: Request, res: Response) => {
    res.redirect('http://localhost:8888/mainPage')
  }
)

//user logout
router.post('/logout', cookieController.deleteSessionCookie, sessionController.endSession, (req: Request, res: Response) => {
  return res.status(200).json('success');
})

// failed authentication
router.get('/failure', (req: Request, res: Response) => {
  res.send('Authentication Failed')
})

export default router;