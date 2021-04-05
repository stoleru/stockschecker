import express from 'express';
import stocksService from './stocks.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:stocks-controller');
class StocksController {
    async listStocks(req: express.Request, res: express.Response) {
        const stocks = await stocksService.list();
        res.status(200).send(stocks);
    }

    async create(req: express.Request, res: express.Response) {
      const url = new URL(req.body.url);
      const symbol = url.searchParams.get("symbols");

      log(
          await stocksService.create({
            symbol, url: req.body.url
          })
      );
      res.status(201).send();
    }
}

export default new StocksController();