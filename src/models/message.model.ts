import * as mongoose from 'mongoose';

const Schema: mongoose.Schema = mongoose.Schema;
export const MessageSchema = new Schema({
    sender_id: String,
    receiver_id: String,
    text: String,
    file: {data: Buffer, contentType: String, filename: String},
    status: {type: Boolean, default: false},
    state: {type: Boolean, default: 1},
    created_at: {type: Number, default: Date.now},
    updated_at: Number,
    deleted_at: Number
});
