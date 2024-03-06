//prisma読み込み
import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

// 投稿一覧（トップページ）表示
export default async(req: Request, res: Response): Promise<void> => {
  const posts =  await prisma.posts.findMany(); //全ての投稿を取得
  res.render("posts/allPosts", {posts})
}