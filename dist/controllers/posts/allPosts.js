"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//prisma読み込み
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// 投稿一覧（トップページ）表示
exports.default = async (req, res) => {
    const posts = await prisma.posts.findMany(); //全ての投稿を取得
    res.render("posts/allPosts", { posts });
};
//# sourceMappingURL=allPosts.js.map