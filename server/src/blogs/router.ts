import { NextFunction, Response, Router, Request } from "express";
const blogsRouter = Router();
import { listArticles } from "./operations/list";
import { findArticleById } from "./operations/find-by-id";
import { createArticle } from "./operations/create";
import { editArticle } from "./operations/edit";
import { deleteArticle } from "./operations/delete";

blogsRouter.get(
  "/:articleId",
  async (req: Request, res: Response, next: NextFunction) => {
    const article = await findArticleById(req.params.articleId);
    res.status(200).json({
      article,
    });
  }
);

blogsRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    const articles = await listArticles();
    res.status(200).json({
      articles,
    });
  }
);

export default blogsRouter;
