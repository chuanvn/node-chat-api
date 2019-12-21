import * as mongoose from 'mongoose';
import {UserModel, IUser} from "../models/user.model";
import * as bcrypt from 'bcryptjs';
import * as uuid from "uuid";

export class UserService {
    localRegister(email, gender, password) {
        return new Promise(async (resolve, reject) => {
            const salt = bcrypt.genSaltSync(8);
            const user: IUser = new UserModel({
                username: email.split('@')[0],
                gender: gender,
                local: {
                    email: email,
                    password: bcrypt.hashSync(password, salt),
                    code: uuid.v4()
                }
            });

            await user.save();
            resolve(user);
        });
    }
}
