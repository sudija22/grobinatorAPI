"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const pgp = pg_promise_1.default({ /* Initialization Options */});
exports.db = pgp("postgres://postgres:root@localhost:5432/grobinator");
//# sourceMappingURL=db.js.map