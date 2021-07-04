import Router from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuthenticated';
import UsersControllers from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';
import UsernameController from '../controllers/UserNameController';
export const usersRoutes = Router();
const upload = multer(uploadConfig);
const usersController = new UsersControllers();
const userAvatarController = new UserAvatarController();
const userNameController = new UsernameController();

//-------------Listagem de usuários---------------//
  usersRoutes.get('/', usersController.index);


//---------------------Encontrar Usuário pelo username-----------------//
usersRoutes.get('/:username', ensureAuthenticated, usersController.find);


//------------Cadastro de usuários----------------//
 usersRoutes.post('/', usersController.create);
 
 
//----------Atualizar Username do usuário--------//
usersRoutes.patch('/username', ensureAuthenticated, userNameController.update);


//-------------------------------------Update de avatar do usuário-----------------------------------//
usersRoutes.patch('/avatar', ensureAuthenticated, upload.single('avatar'), userAvatarController.update);