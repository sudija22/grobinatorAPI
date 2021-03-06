import {Request, Response} from 'express'
import {db} from './db'

export async function candleList(req: Request, res: Response) {
    db.multi('SELECT * FROM candle')
        .then(function (data) {
            console.log('List of Covid19 Weekly data: ', data );
            return res.status(200).send(data);
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            return res.send('Query error for list candle');
    });
}


export async function candleTTL(req: Request, res: Response) {
    var candle_id =  req.params.id;
    console.log("asdas", candle_id);
    var sql = 'SELECT * FROM candle WHERE id_candle=' + candle_id;
    db.multi(sql)
        .then(function (data) {
            console.log('List of Covid19 Weekly data: ', data );
            return res.status(200).send(data);
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            return res.send('Query error for list candle');
    });
}

export async function addTimeCandle(req: Request, res: Response) {
    var candle_id =  req.params.id;
    console.log("asdas", candle_id);
    var sql = 'SELECT * FROM candle WHERE id_candle=' + candle_id;
    db.multi(sql)
        .then(function (data) {
            console.log('List of Covid19 Weekly data: ', data );
            return res.status(200).send(data);
        })
        .catch(function (error) {
            console.log('ERROR:', error)
            return res.send('Query error for list candle');
    });
}