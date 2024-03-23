//prisma読み込み
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// 投稿処理
export default async (req: Request, res: Response): Promise<void> => {
  try {
    await prisma.post.create({data: {content: req.body.content}});   //投稿をデータベースに保存。createの引数は{data: req.body}でも可。
    console.log("データ登録に成功しました");
  } catch(error) {
    console.log("データ登録にエラーがありました")
    console.log(error)
  }
  res.redirect("/posts"); //トップページへ遷移
}