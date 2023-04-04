import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import corsOptions from './config/cors.js';
import { NotFoundError } from './errors/baseErrors.js';
import deleteFilesOnError from './middlewares/deleteFilesOnError.js';
import errorHandler from './middlewares/errorHandler.js';
import routes from './routes/index.js';
import isDevEnvironment from './utils/general/isDevEnvironment.js';

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(helmet());
if (isDevEnvironment) app.use(morgan('dev'));

// Routes
app.use('/api', routes);

// Non existing routes
app.all('*', (req, res, next) => {
  next(new NotFoundError(`Route "${req.route}" not found`));
});

// Needs to be after the routes
app.use(deleteFilesOnError);
app.use(errorHandler);

export default app;
