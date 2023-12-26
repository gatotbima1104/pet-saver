"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const dotenv = require("dotenv");
dotenv.config();
const Env = () => ({
    DB_HOST: process.env.DB_HOST,
    DB_PORT: +process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
});
exports.Env = Env;
//# sourceMappingURL=env.loader.js.map