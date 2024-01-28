import { postQuery, getAllQuery } from "../model/post";

export const post = async (req, res, next) => {
  try {
    const result = await postQuery();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (req, res, next) => {
  try {
    const result = await getAllQuery();
    res.send(result).json();
  } catch (error) {
    next(error);
  }
};
