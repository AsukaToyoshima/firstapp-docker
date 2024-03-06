"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//ルーティングファイル
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
//サーバーサイドの処理を読み込み
const allPosts_1 = __importDefault(require("../controllers/posts/allPosts"));
const createGet_1 = __importDefault(require("../controllers/posts/createGet"));
const createPost_1 = __importDefault(require("../controllers/posts/createPost"));
//リクエストに対するアクション(実行処理)を定義
router.get('/posts', allPosts_1.default); //投稿一覧表示
router.get('/posts/create', createGet_1.default); //投稿画面表示
router.post('/posts/create', createPost_1.default); //投稿処理
exports.default = router;
//# sourceMappingURL=index.js.map