import express, { Request, Response } from 'express';
import passport from 'passport';
import '../config/passport';
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');
const router = express.Router();

// general user login
router.post('/login', userController.getUser, cookieController.sessionCookie, sessionController.isLoggedIn, (req: Request, res: Response) => {
  // what to send back?
  return res.status(200).json(res.locals.userInfo)
})

//user logout
router.post('/logout', cookieController.deleteSessionCookie, sessionController.endSession, (req: Request, res: Response) => {
  return res.status(200).json('success');
})
// router.post('/logout', (req: Request, res: Response) => {
//   console.log('body', req.body);
//   res.status(200).json('hi')
// })

// general user register
router.get('/register', userController.addUser, cookieController.sessionCookie, sessionController.startSession, (req: Request, res: Response) => {
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

// logout router


// failed authentication
router.get('/failure', (req: Request, res: Response) => {
  res.send('Authentication Failed')
})

export default router;