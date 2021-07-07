import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import UploadUserAvatarService from "@modules/users/services/UploadUserAvatarService";
import AppError from "@shared/errors/AppError";
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
export default class UserAvatarController{

    public async update(request: Request, response: Response): Promise<Response | null>{

        const usersRepository = new UsersRepository();
        const uploadUserAvatar = new UploadUserAvatarService(usersRepository);

        const avatar = request.file?.filename;

        if(!avatar){
            throw new AppError('É necessário inserir um arquivo para realizar o upload.', 400);
        }

        const user = await uploadUserAvatar.execute({user_id: request.user.id, avatar_filename: avatar});
    
        return response.json(user);
    }


}