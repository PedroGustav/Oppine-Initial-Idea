import AppError from "@shared/errors/AppError";
import IUsersRepository from "../repositories/IUsersRepository";
import uploadConfig from '@config/upload';
import path from 'path';
import fs from 'fs';

interface RequestData{
    user_id: string;

    avatar_filename:  string;
}

export default class UploadUserAvatarService{

    constructor(private usersRepository: IUsersRepository){}


    public async execute({user_id, avatar_filename}: RequestData){

        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new AppError('Este Id não pertence a nenhum usuário', 404);
        }

        if(user.avatar){

            const avatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const checkAvatarFileExists = await fs.promises.stat(avatarFilePath);


            if(checkAvatarFileExists){

                await fs.promises.unlink(avatarFilePath);
            }
        }

        user.avatar = avatar_filename;

        await this.usersRepository.save(user);

        return user;
    }
}