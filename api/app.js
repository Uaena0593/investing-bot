import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import htmlAuthRouter from './routes/htmlAuth.js';
import htmlResponseRouter from './routes/htmlResponse.js';
import requestRouter from './routes/request.js';
import oauthRouter from './routes/oauth.js';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/oauth', oauthRouter);
app.use('/request', requestRouter);
app.use('/htmlAuth',htmlAuthRouter);

app.use('/htmlResponse',htmlResponseRouter);

// Use import.meta.url to get the current module's URL
const __filename = new URL(import.meta.url).pathname;
// Use path.dirname to extract the directory name
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));


app.disable('etag');

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;
