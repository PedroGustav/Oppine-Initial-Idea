import PostsRepository from "@modules/posts/infra/typeorm/repositories/PostsRepository";
import ListUserPublicationsService from "@modules/posts/services/ListUserPublicationsService";
import { Request, Response } from "express";

export default class UserPublicationsController{

    public async index(request: Request, response: Response): Promise<Response>{

        const id_user = request.user.id;

        const postsRepository = new PostsRepository();
        const userPublications = new ListUserPublicationsService(postsRepository);

        const posts = await  userPublications.execute(id_user);

        return response.json(posts);
    }
}