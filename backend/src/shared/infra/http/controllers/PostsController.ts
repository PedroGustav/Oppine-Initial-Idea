import PostsRepository from "@modules/posts/infra/typeorm/repositories/PostsRepository";
import CreateFeedService from "@modules/posts/services/CreateFeedService";
import CreatePostService from "@modules/posts/services/CreatePostService";
import { Request, Response } from "express";

export default class PostsControllers{
    
    public async create(request: Request, response: Response): Promise<Response>{

        const { description } = request.body;

        const id_user = request.user.id;

        const image = request.file?.filename;

        const postRepository = new PostsRepository();
        const createPost = new CreatePostService(postRepository);

        const post = await createPost.execute({ id_user, description, image });
    
        return response.json(post);
    }


    public async index(request: Request, response: Response): Promise<Response>{
          
        const id_user = request.user.id;

        const postsRepository = new PostsRepository();
        const createFeed = new CreateFeedService(postsRepository);
        const feed = await createFeed.execute(id_user);

        return response.json(feed);
        
     }
}