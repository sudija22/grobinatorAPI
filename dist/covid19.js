"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usagesynopsis_1 = require("./usagesynopsis");
const candle_1 = require("./candle");
const candle_2 = require("./candle");
const app = express_1.default();
const port = 3000;
/*
function candleTTL1(req: Request, res: Response) {
    const candle_id = time;
    db.multi('SELECT * FROM candle WHERE id_candle = $[candle_id]')
        .then(function (data) {
            console.log('List of Covid19 Weekly data: ', data );
            return res.status(200).send(data);
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            return res.send('Query error for list candle');
    });
}
*/
// ----------- Usage Synopsis ----------------------------------------------------------------------
app.get('/', (req, res) => usagesynopsis_1.usagesynopsis(req, res));
// ---------  List all covid19 / day data ---------------------------------------------------------
app.get('/candle', (req, res) => candle_1.candleList(req, res));
app.get("/candle/:id", (req, res) => candle_2.candleTTL(req, res));
//app.post('/candle', )
// ------------------- Listener --------------------------------------------------------------------
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
//# sourceMappingURL=covid19.js.map