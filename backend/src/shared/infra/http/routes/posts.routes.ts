import {Router} from 'express';
import PostsControllers from '../controllers/PostsController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';
import multer from 'multer';
import UserPublicationsController from '../controllers/UserPublicationsController';

export const postsRoutes = Router();
const postsController = new PostsControllers();
const userPublicationsController = new UserPublicationsController();

const upload = multer(uploadConfig);


//-------------------------------Criando uma nova postagem-------------------------------//
postsRoutes.post('/', ensureAuthenticated, upload.single('image'), postsController.create);

//---------------------Criando feed de publicações------------------//
postsRoutes.get('/feed', ensureAuthenticated, postsController.index);

//---------------------Listando postagens por usuário----------------------//
postsRoutes.get('/:id', ensureAuthenticated, userPublicationsController.index);

