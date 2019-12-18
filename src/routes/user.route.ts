import {Request, Response} from 'express';
import {UserController} from "../controllers/user.controller";
import {UserValidation} from "../validation/user.validation";

export class UserRoute {
    private userController: UserController = new UserController();
    private userValidation: UserValidation = new UserValidation();
    public routes(app): void {
        app.route('/register')
            .get(this.userController.register)
            .post(this.userValidation.register(), this.userController.register);

        app.route('/login')
            .get(this.userController.login);
    }
}
