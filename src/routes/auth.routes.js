import { Router } from 'express';

import * as authCtrl from '../controllers/auth.controller';
import { verifySignup } from '../middlewares';

const router = Router();

router.get(
	'/signup',
	[verifySignup.checkUsernameOrEmailExist, verifySignup.checkRolesExist],
	authCtrl.signUp
);
router.get('/signin', authCtrl.signIn);

export default router;
