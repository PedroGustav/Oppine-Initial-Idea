import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import UpdateUsernameService from "@modules/users/services/UpdateUsernameService";
import { Request, Response } from "express";

declare global{

    namespace Express{

        export interface Request{

            user:{
                id: string;
            }
        }
    }
}

export default class UsernameController{

    
    public async update(request: Request, response: Response): Promise<Response>{

        const {username} = request.body;
        
        const id_user = request.user.id;

        const usersRepository = new UsersRepository()
        const updateUsername = new UpdateUsernameService(usersRepository);

        const user = await updateUsername.execute({id_user, username});

        return response.status(200).json(user);
    }
}