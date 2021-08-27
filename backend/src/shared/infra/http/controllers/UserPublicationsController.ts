import PostsRepository from "@modules/posts/infra/typeorm/repositories/PostsRepository";
import ListUserPublicationsService from "@modules/posts/services/ListUserPublicationsService";
import { Request, Response } from "express";

export default class UserPublicationsController{

    public async index(request: Request, response: Response): Promise<Response>{

        const id = request.params.id;

        const postsRepository = new PostsRepository();
        const userPublications = new ListUserPublicationsService(postsRepository);

        const posts = await userPublications.execute(id);

        return response.json(posts);
    }
}