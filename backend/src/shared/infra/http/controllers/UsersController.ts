import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import CreateUserService from '@modules/users/services/CreateUserService';
import FindUserByUsernameService from '@modules/users/services/FindUserByUsernameService';
import ListAllUsersService from '@modules/users/services/ListAllUsersService';
import { Request, Response } from 'express';

export default class UsersControllers{

    public async create(request: Request, response: Response): Promise<Response>{
        const { name, email, password } = request.body;

    
        const usersRepository = new UsersRepository();
        const createUser = new CreateUserService(usersRepository);

        const user = await createUser.execute({
            name,
            email,
            password,
        });


        return response.status(201).json(user);
    }


    public async index(request: Request, response: Response): Promise<Response>{
        const usersRepository = new UsersRepository();

        const listUsers = new ListAllUsersService(usersRepository);
        const users = await listUsers.execute();
        return response.status(200).json(users);
    }


    public async find(request: Request, response: Response): Promise<Response>{

        const username  = request.params.username;

        const usersRepository = new UsersRepository();
        const findUserByUsername = new FindUserByUsernameService(usersRepository);

        const user  = await findUserByUsername.execute(username);

        return response.json(user);
    }
}