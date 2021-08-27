import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import AppError from '@shared/errors/AppError';
import Routes from '@shared/infra/http/routes';

import 'reflect-metadata';
import '@shared/infra/typeorm';
import upload from '@config/upload';



const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(upload.directory));
app.use(Routes);


app.use((err: Error | AppError, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    }

    console.log(err);

    return response.status(500).json({
        status: 'error',
        message: 'internal server error',
    });
});


app.listen(3333, () => {
    console.log('it`s amazing!');   
});