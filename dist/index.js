"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
// クライアントから送信されたデータを解析し、req.bodyオブジェクトとしてアクセスできるようにする
app.use(express_1.default.urlencoded({ extended: true }));
// テンプレートエンジンにEJS使用するように設定
app.set("view engine", "ejs");
// publicフォルダ内のファイルを、を静的ファイル（画像、CSSファイル、JavaScriptファイルなど）として扱うよう設定
app.use("/public", express_1.default.static("public"));
// ルーティングを読み込む
app.use(routes_1.default);
// localhost:5000で起動
app.listen(3000, () => {
    console.log("Listening on localhost port 3000");
});
//# sourceMappingURL=index.js.map