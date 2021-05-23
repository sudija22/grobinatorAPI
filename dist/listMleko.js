"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMleko = void 0;
const db_1 = require("./db");
function listMleko(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        db_1.db.multi('SELECT * FROM mleko')
            .then(function (data) {
            console.log('List of Covid19 Mleko data: ', data);
            return res.status(200).send(data);
        })
            .catch(function (error) {
            console.log('ERROR:', error);
            return res.send('Query error for list players');
        });
    });
}
exports.listMleko = listMleko;
//# sourceMappingURL=listMleko.js.map