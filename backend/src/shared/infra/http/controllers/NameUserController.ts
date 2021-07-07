import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UpdateUserNameService from '@modules/users/services/UpdateNameService';
import {Request, Response} from 'express';

export default class NameUserController{

    async update(request: Request, response: Response): Promise<Response>{

        const { name } = request.body;

        const id_user = request.user.id;

        const usersRepository = new UsersRepository();
        const updateName = new UpdateUserNameService(usersRepository);

        const user = await updateName.execute({
            id_user,
            name
        });

        return response.json(user);


    }
}