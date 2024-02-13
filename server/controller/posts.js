import { postQuery, getAllQuery } from '../model/post.js';
import { validatePost } from '../schemas/posts.js';

export const post = async (req, res, next) => {
  const validation = validatePost(req.body);
  try {
    if (validation.success) {
      await postQuery(req);
      res.status(201).json('<h1> Post created </h1>');
    } else {
      console.error(validation.error);
      return res
        .status(400)
        .send('<h1>Post cant be created. Incorrect syntax</h1>');
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error });
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const result = await getAllQuery();
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: error });
    next(error);
  }
};
