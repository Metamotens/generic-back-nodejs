import { Router } from 'express';

import * as imageCtrl from '../controllers/image.controller';
import { authJwt } from '../middlewares';

const router = Router();

router.get('/', [authJwt.verifyToken, authJwt.isModerator], imageCtrl.getImages);

export default router;
