import { Request, Response } from 'express';

// 投稿画面表示
const createGet = (req: Request, res: Response): void => {
  res.render("posts/createGet")
}

export default createGet;