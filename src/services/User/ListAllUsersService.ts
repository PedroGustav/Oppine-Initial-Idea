import { getRepository } from "typeorm";
import User from "../../models/User";

export default class ListAllUsersService{


    async execute(){
        const usersRepository = getRepository(User);

        const users = await usersRepository.find();

        return users;

    }
}