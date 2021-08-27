import {Router} from 'express';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import FollowsController from '../controllers/FollowsController';
import FriendsController from '../controllers/FriendsController';

const followsController = new FollowsController();
const friendsController = new FriendsController();
export const followsRoutes = Router();

followsRoutes.post('/', ensureAuthenticated, followsController.create);

followsRoutes.get('/', ensureAuthenticated, followsController.index);

followsRoutes.delete('/', ensureAuthenticated, followsController.delete);

followsRoutes.get('/friends', ensureAuthenticated, friendsController.index);