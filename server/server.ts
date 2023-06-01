import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cookieParser from 'cookie-parser';
import router from './routers/router';
import connectDB from './config/db';
import passport from 'passport';
import session from 'express-session';
const PORT = 6000;
const app = express();

connectDB();

dotenv.config();

// passport config
// require('./config/passport')(passport)
app.use(session({
  secret: 'secret',
  // session save based on modifications
  resave: false,
  // session created when nothing stored
  saveUninitialized: false,
}))


// global middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(passport.authenticate('session'))
app.use(passport.initialize())
app.use(passport.session())

// serve static files?
app.use(express.static(path.join(__dirname, '../client')));

app.get('/', (req: Request, res: Response) => {
  console.log('Backend and frontend linked');
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// general server routing
app.use('/api', router);

// Local error handler
app.use((req: Request, res: Response) => res.sendStatus(404));


// Global error handler
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 400,
    message: { err: err },
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log("ERROR: ", errorObj.log);
  const errorStatus = errorObj.status || 500;
  return res.status(errorStatus).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export default app;