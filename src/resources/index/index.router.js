import { Router } from "express";
import { index } from './index.controller';

const router = new Router();

router.get('/', index);

export default router;