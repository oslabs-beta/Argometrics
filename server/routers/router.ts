import express from 'express';
import authRouter from './authRouter';
import profileRouter from './profileRouter';
import clusterRouter from './clusterRouter';
const router = express.Router();

// auth router
router.use('/auth', authRouter);

// profile router
router.use('/profile', profileRouter);

// cluster router
router.use('/cluster', clusterRouter);



export default router;