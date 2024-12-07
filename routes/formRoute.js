import express from 'express';
const router=express.Router();
import FormController from '../controllers/formController.js';
router.post('/createForm',FormController.createForm);
router.get('/getAllForm',FormController.getForm);
router.get('/getsingleForm/:id',FormController.getsingleform);
router.patch('/editForm/:id',FormController.editForm);
router.delete('/deleteForm/:id',FormController.deleteForm);
export default router;