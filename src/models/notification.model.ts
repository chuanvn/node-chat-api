import * as mongoose from 'mongoose';

const Schema: mongoose.Schema = mongoose.Schema;
export const NotificationSchema = new Schema({
    sender_id: String,
    receiver_id: String,
    type: String,
    content: String,
    is_read: {type: Boolean, default: false},
    status: {type: Boolean, default: false},
    state: {type: Boolean, default: 1},
    created_at: {type: Number, default: Date.now},
    updated_at: Number,
    deleted_at: Number
});
