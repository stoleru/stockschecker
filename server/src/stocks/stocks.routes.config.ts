import { RoutesConfig } from '../common/routes.config';
import StocksController from './stocks.controller';
import express from 'express';

export class StocksRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'StocksRoutes');
    }

    configureRoutes() {
        this.app
          .route(`/stocks`)
          .get(StocksController.listStocks);

        this.app.post(`/stocks/`, [
          StocksController.create,
        ]);

        return this.app;
    }
}