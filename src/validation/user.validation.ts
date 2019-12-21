import {check} from "express-validator";
import {USER_MSG_0001, USER_MSG_0002, USER_MSG_0003, USER_MSG_0004} from "../config/messages";

export class UserValidation {
    register(): Array<any> {
        return [
            check('email', USER_MSG_0001)
                .isEmail()
                .trim(),
            check('gender', USER_MSG_0002)
                .isIn(['male', 'female']),
            check('password', USER_MSG_0003)
                .isLength({min: 6}),
            check('confirm_password', USER_MSG_0004)
                .custom((value, {req}) => {
                    return value === req.body.password
                })
        ];
    }
}
