import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import AuthenticadedUserService from "@modules/users/services/AuthenticatedUserService";
import { Request, Response } from "express";

export default class SessionsController{

    public async create(request: Request, response: Response): Promise<Response>{
        const { email, password } = request.body;
     
        const usersRepository = new UsersRepository();
        const authenticatedUser = new AuthenticadedUserService(usersRepository);
        
        const { user, token } = await authenticatedUser.execute({
            email,
            password,
        });

        return response.json({
            user:{
                id: user.id,
                name: user.name,
                email: user.email,
                username: user.username,
            },
            token,
        });
    }
}