import database from '../common/knex.config';

export interface Stocks {
  id: number;
  symbol: string;
  url: string;
}

export default class StockModel {
  static async fetchAll() {
    try {
      const stocks = await database('stocks').select('*');
      return stocks;
    } catch (err) {
      // error handling
    }
  }

  static async create(data: any) {
    try {
      const stock = await database('stocks').insert(data)
      return stock;
    } catch (err) {
      // error handling
    }
  }
}