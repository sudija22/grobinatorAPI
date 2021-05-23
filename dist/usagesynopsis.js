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
exports.usagesynopsis = void 0;
function usagesynopsis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.send('Usage synopsis: <br><br>\
        * list covid per day: <br>\
            - http://localhost:3000/covidPerday <br>\
        <br>\
        * list covid per week: <br>\
            - http://localhost:3000/listTedenskiPodatki <br>\
        <br>\
        * list milk data per week: <br>\
            - http://localhost:3000/listMleko <br>\
        <br>\
        * list butter data per week: <br>\
            - http://localhost:3000/listMaslo <br>\
        <br>\
     ');
    });
}
exports.usagesynopsis = usagesynopsis;
//# sourceMappingURL=usagesynopsis.js.map