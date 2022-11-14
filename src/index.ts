import express from 'express';
import cors from 'cors';
import 'express-async-errors';

import palpitesRouter from './routes/palpitesRouter';

import { errorHandlingMiddleware } from './middlewares/errorHandlerMiddleware';

const app = express();

app.use(express.json());

app.use(cors());


app.use(palpitesRouter);

//app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || '5000';
const HOST = '127.0.0.1';

app.listen({ port: PORT, host: HOST},  () => {
    console.log(`Server is listening on port ${PORT}.`);
});