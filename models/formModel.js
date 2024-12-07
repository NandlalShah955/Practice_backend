import mongoose from 'mongoose';
const formDataSchema = new mongoose.Schema({
    text: { type: String, trim: true },
    number: { type: Number, trim: true },
    email: { type: String, trim: true },
    fullname: { type: String, trim: true },
    password: { type: String, trim: true },
    title: { type: String, required: true, trim: true },
    date: { type: Date, trim: true }
}, {
    timestamps: true,
    versionKey: false
})
const FormDataModel = mongoose.model("formData", formDataSchema);

export default FormDataModel;