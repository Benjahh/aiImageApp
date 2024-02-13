import OpenAI from 'openai';
import * as dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const post = async (req, res, next) => {
  console.log(req.body);
  try {
    const { prompt } = req.body;
    console.log('YPOO', prompt);
    const aiResponse = await openai.images.generate({
      prompt: prompt ?? 'Apple',
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
