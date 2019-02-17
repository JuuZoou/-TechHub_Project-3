import { Router } from "express";
import { product } from './product.controller';

const router = new Router();

router.post('/', product); 

export default router;