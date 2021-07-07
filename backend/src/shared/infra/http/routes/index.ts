import express from 'express';
import { postsRoutes } from './posts.routes';
import { sessionsRoutes } from './sessions.routes';
import {usersRoutes} from './users.routes';
import {followsRoutes} from './follows.routes';
import { reactionsRouter } from './reaction.routes';
const Routes = express.Router();

Routes.use('/user', usersRoutes);
Routes.use('/sessions',sessionsRoutes);
Routes.use('/post', postsRoutes);
Routes.use('/follow', followsRoutes);
Routes.use('/reaction', reactionsRouter);

export default Routes;