import {validationResult} from "express-validator";
import {Request, Response} from "express";
import {COMMON_MSG_0001} from "../config/messages";
import {UserService} from "../services/user.service";
import {HttpResponseModel} from "../models/http-response.model";

export class UserController {
    private userService: UserService;
    constructor() {
        this.userService = new UserService();
    }

    async register(req: Request, res: Response) {
        const validate = validationResult(req);
        let msg: string = '';
        let success: boolean = false;
        let data = {};
        if (!validate.isEmpty()) {
            const errors = Object.values(validate.mapped());
            errors.forEach(item => {
                msg += `${item.msg}. `;
            });

            res.json({
                success,
                data,
                msg
            });
            return;
        }

        try {
            const body = req.body;
            data = await this.userService.localRegister(body.email, body.gender, body.password);
            success = true;
            msg = COMMON_MSG_0001;
        } catch (e) {
            console.log(e);
            msg = e;
        }

        res.json({
            success,
            data,
            msg
        });
    }

    public login(req: Request, res: Response) {
        res.status(200)
            .send('Login')
    }
}
