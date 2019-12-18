import * as mongoose from 'mongoose';

const Schema: mongoose.Schema = mongoose.Schema;
export const UserSchema = new Schema({
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
