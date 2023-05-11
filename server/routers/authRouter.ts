import express, { Request, Response } from 'express';
import passport from 'passport';
import '../config/passport';
const router = express.Router();

// general user auth
router.get('/', (req: Request, res: Response) => {
  // need to add db check
  return res.status(200)
})

// google auth
router.get('/google', passport.authenticate('google', { scope: [ 'email' ] }))

// google callback auth
// what endpoint to redirect upon failure? upon success? 
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/api/auth/failure' }),
  (req: Request, res: Response) => res.redirect('/')
)

// logout router


// failed authentication
router.get('/failure', (req: Request, res: Response) => {
  res.send('Authentication Failed')
})

export default router;