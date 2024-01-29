import { Router } from 'express';
import OpenAI, { Configuration, OpenAIApi } from 'openai';
import * as dotenv from 'dotenv';
import { post } from '../controller/dalle.js';

dotenv.config();

const dalleRouter = Router();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

dalleRouter.get('/', post);

export default dalleRouter;
