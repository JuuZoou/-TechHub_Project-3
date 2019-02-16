import express from "express";
import { json, urlencoded } from 'express';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import config from './src/config/index';
import { connect } from "./src/utils/db";
import userRouter from './src/resources/user/user.router';

const app = express();

app.use( express.static('./public') );
app.use( json() );
app.use( urlencoded({ extended: true}) );
app.use( cookieParser() );
app.use( morgan('dev') );

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use('/', userRouter);
app.use('/register/user', userRouter);
app.use('/register/company', userRouter);
app.use('/login', userRouter);
app.use('/user/:id', userRouter);

// IIFE
(async () => {
    try {
        await connect();
        app.listen(config.port, () => {
            console.log(`http://localhost:${config.port}`)
        })
    }
    catch(error) {
        console.error(error);
    }
})();

