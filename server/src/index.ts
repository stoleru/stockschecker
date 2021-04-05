import express from 'express';
import * as http from 'http';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors'
import { RoutesConfig } from './common/routes.config';
import { StocksRoutes } from './stocks/stocks.routes.config';
import { SettingsRoutes } from './settings/settings.routes.config';
import debug from 'debug';

const appPort = 3001;
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const routes: RoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

routes.push(new StocksRoutes(app));
routes.push(new SettingsRoutes(app));

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`Server running at http://localhost:${appPort}`)
});

server.listen(appPort, () => {
    debugLog(`Server running at http://localhost:${appPort}`);
    routes.forEach((route: RoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});

module.exports = app;