import express from 'express';
import settingsService from './settings.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:settings-controller');
class SettingsController {
    async listSettings(req: express.Request, res: express.Response) {
        const settings = await settingsService.list();
        res.status(200).send(settings);
    }

    async put(req: express.Request, res: express.Response) {
      console.log("yolo", req.body.value)
        log(
            await settingsService.putById(req.params.settingsKey, req.body.value)
        );
        res.status(204).send();
    }
}

export default new SettingsController();