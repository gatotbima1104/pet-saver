"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_loader_1 = require("../env.loader");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = (0, env_loader_1.Env)();
const typeOrmConfig = {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
    dropSchema: false,
};
exports.default = typeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map