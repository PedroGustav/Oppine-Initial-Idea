import express from 'express';
import {usersRoutes} from './users.routes';

const Routes = express.Router();

Routes.use('/user', usersRoutes);

export default Routes;