import {Router} from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import FollowsController from '../controllers/FollowsController';

const followsController = new FollowsController();

export const followsRoutes = Router();

followsRoutes.post('/', ensureAuthenticated, followsController.create);

followsRoutes.get('/', ensureAuthenticated, followsController.index);

followsRoutes.delete('/', ensureAuthenticated, followsController.delete);