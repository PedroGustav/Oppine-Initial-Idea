import PostsRepository from "@modules/posts/infra/typeorm/repositories/PostsRepository";
import IPostsRepository from "@modules/posts/repositories/IPostsRepository";
import AppError from "@shared/errors/AppError";
import IReactionsRepoository from "../repositories/IReactionsRepository";

interface RequestData{
    id_post: string;
    type: string;
}

export default class CountReactionsInPostService{
    private postsRepository: IPostsRepository;
    constructor(private reactionsRepository: IReactionsRepoository){
        this.postsRepository = new PostsRepository();
    }

    async execute({ id_post, type}: RequestData){

        const checkPost = await this.postsRepository.findById(id_post);
        
        if(!checkPost){

            throw new AppError('Não existe nenhum post com este id.', 404);
        }

        if(type !== 'concordo' && type !== 'discordo'){

            throw new AppError('Tipo Inválido.', 400);
        }

        const reactions = await this.reactionsRepository.count({ id_post, type });

        return { reactions }
    }
}