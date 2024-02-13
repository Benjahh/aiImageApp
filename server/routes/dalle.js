import { Router } from 'express';

import { post } from '../controller/dalle.js';

const dalleRouter = Router();

dalleRouter.post('/', post);

export default dalleRouter;
