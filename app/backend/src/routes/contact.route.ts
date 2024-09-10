import { Router } from 'express';
import ContactController from '../controllers/ContactController';

const contactRouter = Router();
const contactController = new ContactController();

contactRouter.get('/:id', (req, res) => contactController.getContactById(req, res));
contactRouter.post('/', (req, res) => contactController.createContact(req, res));
contactRouter.put('/:id', (req, res) => contactController.updateContact(req, res));
contactRouter.delete('/:id', (req, res) => contactController.deleteContact(req, res));

export default contactRouter;
