import {validationResult} from "express-validator";
import {Request, Response} from "express";
import {COMMON_MSG_0001} from "../config/messages";
import {UserService} from "../services/user.service";
import {HttpResponseModel} from "../models/http-response.model";

export class UserController {
    private userService: UserService;
    private httpResponse: HttpResponseModel = new HttpResponseModel();
    constructor() {
        this.userService = new UserService();
    }

     register = async (req: Request, res: Response) => {
        const validate = validationResult(req);
        this.httpResponse.res = res;
         let msg: string = this.httpResponse.getError(validate);
        let success: boolean = false;
        let data = {};
        if(msg) {
            this.httpResponse.setResponse(success, data, msg);
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

        return this.httpResponse.setResponse(success, data, msg);
    };

    public login(req: Request, res: Response) {
        res.status(200)
            .send('Login')
    }
}
