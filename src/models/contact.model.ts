import * as mongoose from 'mongoose';

const Schema: mongoose.Schema = mongoose.Schema;
export const ContactSchema = new Schema({
    user_id: String,
    contact_id: String,
    status: {type: Boolean, default: false},
    state: {type: Boolean, default: 1},
    created_at: {type: Number, default: Date.now},
    updated_at: Number,
    deleted_at: Number
});
