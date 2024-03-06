//ルーティングファイル
import express, { Request, Response } from 'express';
const router = express.Router();

//サーバーサイドの処理を読み込み
import allPosts from '../controllers/posts/allPosts';
import createGet from '../controllers/posts/createGet';
import createPost from '../controllers/posts/createPost';

//リクエストに対するアクション(実行処理)を定義
router.get('/posts', allPosts);               //投稿一覧表示
router.get('/posts/create', createGet);       //投稿画面表示
router.post('/posts/create', createPost);     //投稿処理

export default router;
