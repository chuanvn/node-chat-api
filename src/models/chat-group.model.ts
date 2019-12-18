import * as mongoose from 'mongoose';

const Schema: mongoose.Schema = mongoose.Schema;
export const ChatGroupSchema = new Schema({
   name: String,
    total_user: {type: Number, default: 0, min: 0, max: 100},
    total_message: {type: Number, default: 0},
    user_id: String,
    members: [
        {
            user_id: String
        }
    ],
    status: {type: Boolean, default: false},
    state: {type: Boolean, default: 1},
    created_at: {type: Number, default: Date.now},
    updated_at: Number,
    deleted_at: Number
});
