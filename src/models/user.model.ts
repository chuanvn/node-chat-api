import {Document, model, Model, Schema} from 'mongoose';
interface UserLocal {
    email: string;
    password: string;
    status: number;
    code: string;
}

interface UserSocial {
    uid: string;
    email: string;
}

export interface IUser extends Document{
    username: string;
    gender: string;
    phone_number: string;
    avatar: string;
    local: UserLocal,
    facebook: UserSocial;
    google: UserSocial;
    state: boolean;
    created_at: number;
    updated_at: number;
    deleted_at: number;
}

const UserSchema: Schema = new Schema({
    username: String,
    gender: {type: String, default: 'male'},
    phone_number: {type: String, default: null},
    address: {type: String, default: null},
    avatar: {type: String, default: 'default.jpg'},
    local: {
        email: {type: String, trim: true},
        password: String,
        status: {type: Number, default: 0},
        code: {type: String, default: null}
    },
    facebook: {
        uid: String,
        email: {type: String, trim: true}
    },
    google: {
        uid: String,
        email: {type: String, trim: true}
    },
    state: {type: Boolean, default: 1},
    created_at: {type: Number, default: Date.now},
    updated_at: Number,
    deleted_at: Number
});

UserSchema.methods.checkUserExist = (username) => {
    return this.find({username: username}).exec();
};

export const UserModel: Model<IUser> = model<IUser>('users', UserSchema);
