import { Router } from 'express';

import * as authCtrl from '../controllers/auth.controller';

const router = Router();

router.get('/signup', authCtrl.signUp);
router.get('/signin', authCtrl.signIn);

export default router;
