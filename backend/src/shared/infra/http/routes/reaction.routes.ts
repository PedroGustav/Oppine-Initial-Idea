import {Router} from 'express';
import ReactionsController from '../controllers/ReactionsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const reactionsController = new ReactionsController();
export const reactionsRouter = Router();

reactionsRouter.post('/', ensureAuthenticated, reactionsController.create);

reactionsRouter.get('/agree/:idpost', ensureAuthenticated, reactionsController.countAgrees);
reactionsRouter.get('/agree/:idpost', ensureAuthenticated, reactionsController.countDisagrees);

reactionsRouter.delete('/:idreaction', ensureAuthenticated, reactionsController.delete);
