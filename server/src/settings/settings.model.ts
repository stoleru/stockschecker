import database from '../common/knex.config';

export interface Settings {
  key: string;
  value: string;
}

export default class SettingModel {
  static async fetchAll() {
    try {
      const settings = await database('settings').select('*');
      return settings;
    } catch (err) {
      // error handling
    }
  }

  static async putById(key: string, value: string) {
    try {
      const settings = await database('settings').where('key', '=', key).update({ 'value': value})
      return settings;
    } catch (err) {
      // error handling
    }
  }
}