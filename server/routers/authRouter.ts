import express, { Request, Response } from 'express';
import passport from 'passport';
import '../config/passport';
const userController = require('../controllers/userController');
const router = express.Router();

// general user login
router.post('/login', userController.getUser, (req: Request, res: Response) => {
  // what to send back?
  return res.status(200).json(res.locals.userInfo)
})

// general user register
router.post('/register', userController.addUser, (req: Request, res: Response) => {
  // what to send back?
  return res.status(200)
})

// google auth login
router.get('/google', passport.authenticate('google', { scope: [ 'email' ] }))

// google callback auth
// what endpoint to redirect upon failure? upon success? 
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
  (req: Request, res: Response) => res.redirect('/mainPage')
)

// logout router


// failed authentication
router.get('/failure', (req: Request, res: Response) => {
  res.send('Authentication Failed')
})

export default router;