import mongoose from "mongoose";
const Schema = mongoose.Schema;

const cars = new Schema({
    title: {type: String, required: true},
    rate: {type: Number, min: 1, max: 10, default: 5},
    description: {type: String, required: true},
    year: {type: Number, required: true},
    active: {type: Boolean, default: true},
}, {
    versionKey: false,
});

const myModel = mongoose.model('Cars', cars);
export default myModel;