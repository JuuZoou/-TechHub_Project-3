import { Router } from "express";
import { index, authorization } from './user.controller';

const router = new Router();

router.get('/', index);
router.post('/', authorization);

export default router;