import { RoutesConfig } from '../common/routes.config';
import SettingsController from './settings.controller';
import express from 'express';

export class SettingsRoutes extends RoutesConfig {
    constructor(app: express.Application) {
        super(app, 'SettingsRoutes');
    }

    configureRoutes() {
        this.app
          .route(`/settings`)
          .get(SettingsController.listSettings);

        this.app.put(`/settings/:settingsKey`, [
          SettingsController.put,
        ]);

        return this.app;
    }
}