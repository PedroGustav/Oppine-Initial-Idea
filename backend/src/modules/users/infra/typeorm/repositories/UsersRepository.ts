import Post from "@modules/posts/infra/typeorm/entities/Post";
import ICreateUserDTO from "@modules/users/dtos/ICreateUserDTO";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

export default class UsersRepository implements IUsersRepository{

    private ormRepository: Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User);
    }

    public async create({ name, email, password }: ICreateUserDTO){

        const user = this.ormRepository.create({
            name,
            email,
            password
        });

        await this.ormRepository.save(user);

        return await this.ormRepository.findOne(user.id);
    }

    public async listAll(){

        const users = await this.ormRepository.find();

        return users;
    }

    public async findByEmail(email: string): Promise<User | undefined>{

        const findByEmail = await this.ormRepository.findOne({ where: { email }, select: ['id', 'password', 'created_at', 'avatar', 'name', 'username','email']});
        
        return findByEmail;
    }

    public async findById(id: string): Promise<User | undefined>{

        const user = await this.ormRepository.findOne({where: { id }});

        return user;
    }

    public async findByUsername(username: string): Promise<User | undefined>{

        const user = await this.ormRepository.findOne({ where: { username }});

        return user;

    }

    public async save(user: User): Promise<User>{

        return await this.ormRepository.save(user);
    }


    public async delete(id: string): Promise<object>{

        await this.ormRepository.delete(id);

        return {message: 'deleted'};
    }
}