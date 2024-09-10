import { Router } from 'express';
import PersonController from '../controllers/PersonController';

const personRouter = Router();
const personController = new PersonController();

personRouter.get('/', (req, res) => personController.getAllPersons(req, res));
personRouter.get('/:id', (req, res) => personController.getPersonById(req, res));
personRouter.post('/', (req, res) => personController.createPerson(req, res));
personRouter.put('/:id', (req, res) => personController.updatePerson(req, res));
personRouter.delete('/:id', (req, res) => personController.deletePerson(req, res));

export default personRouter;
