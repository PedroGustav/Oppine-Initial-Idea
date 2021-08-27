import ICreatePostDTO from "@modules/posts/dtos/ICreatePostDTO";
import IPostsRepository from "@modules/posts/repositories/IPostsRepository";
import { getRepository, Repository } from "typeorm";
import Post from "../entities/Post";

export default class PostsRepository implements IPostsRepository{
    private ormRepository: Repository<Post>;

    constructor(){
        this.ormRepository = getRepository(Post);
    }

    public async create({id_user, description, image}: ICreatePostDTO): Promise<Post | undefined>{

        const newPost = this.ormRepository.create({
            description,
            id_user,
            image
        })

        await this.ormRepository.save(newPost);

        const post = await this.ormRepository.findOne({where: { id: newPost.id }, relations: ['user']});
    
        return post;
    }

    public async save(post: Post){

        return await this.ormRepository.save(post);
    }

    public async listByUserId(id_user: string): Promise<Post[]>{

        const posts = await this.ormRepository.find({where: { id_user}, relations: ['user'], select: ['id', 'description', 'image', 'created_at', 'updated_at']});

        return posts;
    }

    public async findById(id: string): Promise<Post | undefined>{

        const post = await this.ormRepository.findOne(id);

        return post;
    }
}