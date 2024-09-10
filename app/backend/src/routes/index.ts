import { Router } from 'express';
import personRouter from './person.route';
import contactRouter from './contact.route';

const router = Router();

router.use('/person', personRouter);
router.use('/contact', contactRouter);

export default router;
