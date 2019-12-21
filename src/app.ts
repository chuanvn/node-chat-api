import * as express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from 'mongoose';
import {CommonRoute} from "./routes/common.route";


class App {
    public app: express.Application;
    private urlDb: string = 'mongodb://localhost:27017/chat';
    private routes: CommonRoute;
    constructor() {
        this.app = express();
        this.config();
        this.setupDb();
        this.routes = new CommonRoute(this.app);
    }

    private config(): void {
        //support application/json post data
        this.app.use(bodyParser.json());

        //support application/x-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    private async setupDb() {
        await connect(this.urlDb, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
}

export default new App().app;
