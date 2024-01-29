import { Router } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import { getAll, post } from '../controller/posts.js';

const postRouter = Router();

postRouter.get('/', getAll);
postRouter.post('/', post);

export default postRouter;
