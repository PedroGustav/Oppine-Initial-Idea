import IPostsRepository from '@modules/posts/repositories/IPostsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import Post from '../infra/typeorm/entities/Post';

interface Request{
    id_user: string;
    description: string;
    image?: string;
}

export default class CreatePostService{
    private usersRepository: IUsersRepository

    constructor(private postsRepository: IPostsRepository){
        this.usersRepository = new UsersRepository()
    }

    async execute({ id_user, image, description}: Request){

        const checkUserExists = await this.usersRepository.findById(id_user);

        if(!checkUserExists){
            throw new AppError('O Id informado não pertence a nenhum usuário.', 404);
        }

        if(description.length >= 500){

            throw new AppError('Ops! A publicação deve ter no máximo 500 caractéres.', 400);
        }
        
        if(description.length == 0){

            throw new AppError('Insira uma descrição válida.', 400);
        }

        const post = await this.postsRepository.create({
            id_user,
            description,
            image
        });

        return post;
    }
}