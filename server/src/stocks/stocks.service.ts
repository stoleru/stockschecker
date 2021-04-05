import { stringify } from 'node:querystring';
import { CRUD } from '../common/crud.interface';
import StockModel, { Stocks } from './stocks.model';

class StocksService implements CRUD {
    async putById(id: string) { return; }
    async deleteById(id: string) { return; }
    async patchById(id: string) { return; }
    async readById(id: string) { return; }


    async list() {
      return StockModel.fetchAll().then((stocks) => {
        return stocks;
      });
    }

    async create(data: any): Promise<any> {
      return StockModel.create(data).then((stock) => {
        return stock;
      });
    }
}

export default new StocksService();