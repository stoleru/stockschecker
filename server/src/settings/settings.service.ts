import { stringify } from 'node:querystring';
import { CRUD } from '../common/crud.interface';
import SettingModel, { Settings } from './settings.model';

class SettingsService implements CRUD {
    async create(resource: any) { return; }
    async deleteById(id: string) { return; }
    async patchById(id: string) { return; }
    async readById(id: string) { return; }


    async list() {
      return SettingModel.fetchAll().then((settings) => {
        return settings;
      });
    }

    async putById(key: string, value: string): Promise<any> {
      return SettingModel.putById(key, value).then((settings) => {
        return settings;
      });
    }
}

export default new SettingsService();