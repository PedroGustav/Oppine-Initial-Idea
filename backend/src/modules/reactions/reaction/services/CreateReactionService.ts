import PostsRepository from "@modules/posts/infra/typeorm/repositories/PostsRepository";
import IPostsRepository from "@modules/posts/repositories/IPostsRepository";
import AppError from "@shared/errors/AppError";
import IReactionsRepoository from "../repositories/IReactionsRepository";

interface RequestData{
    id_user: string;
    id_post: string;
    type: 'concordo' | 'discordo';
}
export default class CreateReactionService{
    private postsRepository: IPostsRepository;
    constructor(private reactionsRepository: IReactionsRepoository){

        this.postsRepository = new PostsRepository();
    }


    async execute({id_user, id_post, type}: RequestData){

        const checkPost =  this.postsRepository.findById(id_post);

        if(!checkPost){

            throw new AppError('Não existe nenhum post com este id!', 404);
        }

        const reaction = await this.reactionsRepository.create({
            id_post,
            id_user,
            type
        });

        return reaction;
    }
}