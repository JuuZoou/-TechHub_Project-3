import express from 'express';
import { json, urlencoded } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { fileFilter, storage, upload } from './src/resources/files/index';

import config from './src/config/index';
import { connect } from "./src/utils/db";

import indexRouter from './src/resources/index/index.router';
import userRouter from './src/resources/user/user.router';
import productRouter from './src/resources/product/product.router';

const app = express();

app.use( express.static('./public') );
app.use( json() );
app.use( urlencoded({ extended: true}) );
app.use( cookieParser() );
app.use( morgan('dev') );

app.set("views", "./src/views");
app.set("view engine", "ejs");

// Main Page
app.use('/', indexRouter);
app.use('/user/:id', indexRouter);

// Users
app.use('/login', userRouter);
app.use('/register/user', userRouter);
app.use('/register/company', userRouter);

// Products
app.use('/product/add', upload.single('productImage'), productRouter);

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

