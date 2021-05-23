import express from "express";
import {db} from './db';

import { usagesynopsis } from "./usagesynopsis";
import {candleList } from "./candle";
import {candleTTL} from "./candle";
import {addTimeCandle} from "./candle";

const app = express();
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
app.get('/', (req, res) => usagesynopsis(req, res));

// ---------  List all covid19 / day data ---------------------------------------------------------


app.get('/candle', (req,res) => candleList(req,res));

app.get("/candle/:id", (req,res) => candleTTL(req,res));

app.post("/candeAddTime/500", (req,res) => addTimeCandle(req,res));



//app.post('/candle', )


// ------------------- Listener --------------------------------------------------------------------
app.listen(port, () => console.log(`Listening on http://localhost:${port}`))


