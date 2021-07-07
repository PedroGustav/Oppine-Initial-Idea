import IUsersRepository from '../repositories/IUsersRepository';
export default class ListAllUsersService{

    constructor(private usersRepository: IUsersRepository){
        
    }
    async execute(){

        const users = await this.usersRepository.listAll();

        return users;

    }
}