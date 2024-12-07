import FormDataModel from '../models/formModel.js';

class FormController {
    // Create Form Function
    static createForm = async (req, res) => {
        try {
            const { text,number,email, title, password, fullname ,date} = req.body;

            if (!title) {
                return res.status(400).json({
                    status: "failed",
                    message: "All fields (email, title, password) are required.",
                });
            }

            const doc = new FormDataModel({ text,number, email, title, password, fullname,date });
            await doc.save();

            res.status(201).json({
                status: "success",
                message: "Form created successfully.",
                data: doc,
            });
        } catch (error) {
            res.status(500).json({
                status: "failed",
                message: "Error while creating form.",
                error: error.message,
            });
        }
    };

    // Get All Form Data
    static getForm = async (req, res) => {
        try {
            const formData = await FormDataModel.find();

            if (!formData || formData.length === 0) {
                return res.status(404).json({
                    status: "failed",
                    message: "No forms found.",
                });
            }

            res.status(200).json({
                status: "success",
                message: "Form data fetched successfully.",
                data: formData,
            });
        } catch (error) {
            res.status(500).json({
                status: "failed",
                message: "Error while fetching form data.",
                error: error.message,
            });
        }
    };

    // Edit Form Data Function
    static editForm = async (req, res) => {
        try {
            const { text,number,email, title, password, fullname ,date} = req.body;
            const { id } = req.params;

            if (!email && !title && !placeholder && !fullname && !text &&!number &&!password &&!date) {
                return res.status(400).json({
                    status: "failed",
                    message: "At least one field (email, title, or placeholder) is required for update.",
                });
            }

            const updatedForm = await FormDataModel.findByIdAndUpdate(
                id,
                { email, title, placeholder, fullname },
                { new: true, runValidators: true }
            );

            if (!updatedForm) {
                return res.status(404).json({
                    status: "failed",
                    message: `Form with ID ${id} not found.`,
                });
            }

            res.status(200).json({
                status: "success",
                message: "Form updated successfully.",
                data: updatedForm,
            });
        } catch (error) {
            res.status(500).json({
                status: "failed",
                message: "Error while editing form data.",
                error: error.message,
            });
        }
    };

    static deleteForm = async (req, res) => {
        try {
            const { id } = req.params;

            const deletedForm = await FormDataModel.findByIdAndDelete(id);

            if (!deletedForm) {
                return res.status(404).json({
                    status: "failed",
                    message: `Form with ID ${id} not found.`,
                });
            }

            res.status(200).json({
                status: "success",
                message: "Form deleted successfully.",
            });
        } catch (error) {
            res.status(500).json({
                status: "failed",
                message: "Error while deleting form.",
                error: error.message,
            });
        }
    };

}

export default FormController;
