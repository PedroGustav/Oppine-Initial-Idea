import FollowsRepository from '@modules/reactions/follow/infra/typeorm/repositories/FollowsRepository';
import ListFriendsService from '@modules/reactions/follow/services/ListFriendsService';
import { Request, Response } from 'express';

export default class FriendsController{

    public async index(request: Request, response: Response): Promise<Response>{

        const id = request.user.id;

        const followsRepository = new FollowsRepository();
        const listFriends = new ListFriendsService(followsRepository);

        const friends = await listFriends.execute(id);

        return response.json(friends);
    }
}