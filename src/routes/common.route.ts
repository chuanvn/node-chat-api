import {UserRoute} from './user.route';

export class CommonRoute {
    public authRoute: UserRoute = new UserRoute();
    constructor(app) {
        this.authRoute.routes(app);
    }
}
