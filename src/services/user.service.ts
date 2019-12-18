import * as mongoose from 'mongoose';
import {UserSchema} from "../models/user.model";
import * as bcrypt from 'bcryptjs';
import {uuidv4} from 'uuid';

const UserModel = mongoose.model('users', UserSchema);
export class UserService {
    localRegister(email, gender, password) {
        return new Promise(async (resolve, reject) => {
            const salt = bcrypt.genSaltSync(8);
            const user = new UserModel({
                username: email.split('@')[0],
                gender: gender,
                local: {
                    email: email,
                    password: bcrypt.hashSync(password, salt),
                    code: uuidv4()
                }
            });

            await user.save();
            resolve(user);
        });
    }
}
