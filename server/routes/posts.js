import { Router } from "express";

import { getAll, post } from "../controller/posts.js";

const postRouter = Router();

postRouter.get("/", getAll);
postRouter.post("/create", post);

export default postRouter;
