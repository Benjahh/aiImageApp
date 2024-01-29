import { Router } from "express";

import { post } from "../controller/dalle.js";

const dalleRouter = Router();

dalleRouter.get("/", post);

export default dalleRouter;
