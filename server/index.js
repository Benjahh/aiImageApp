import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import postRouter from './routes/posts.js';
import dalleRouter from './routes/dalle.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRouter);
app.use('/api/v1/dalle', dalleRouter);

const startServer = async () => {
  try {
    app.listen(3001, () => console.log('Server started in port 3001'));
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
