import FollowsRepository from "@modules/reactions/follow/infra/typeorm/repositories/FollowsRepository";
import ListUserFollowsService from "@modules/reactions/follow/services/ListUserFollowsService";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import Post from "../infra/typeorm/entities/Post";
import IPostsRepository from "../repositories/IPostsRepository";

export default class CreateFeedService{
    private usersRepository = new  UsersRepository();
    private followsRepository = new FollowsRepository();
    constructor(private postsRepository: IPostsRepository){}

    async execute(id_user: string){
        
        // Ver se o usuário existe[x]
        // Listar todos os posts do usuário[x]
        // Listar todos os posts dos amigos que receberam o convite[x]
        // Listar todos os posts dos amigos que enviaram o convite[x]
        // Ordenar pela data de postagem [x]

        const checkUserExist = await this.usersRepository.findById(id_user);
        
        if(!checkUserExist){
            
            throw new AppError('Não existe nenhum usuário com este Id!', 404);
            
        }
        
        
        const myPosts = await this.postsRepository.listById(id_user);
        


        const listUserFollows = new ListUserFollowsService(this.followsRepository);
        

        //Listando todas as amizades do usuário, separadas em dois grupos: as que ele quem enviou o convite(sended), e as que ele receu o convite(received). 
        const { sended, received } = await listUserFollows.execute(id_user);


        const friendsId: string[] = [];
        //Selecionando o id de quem recebeu o convite do usuário.
        for(var i = 0; i < sended.length; i++){
            friendsId.push(sended[i].id_user_receive);
        }
        //Selecionando o id de quem enviou o convite do usuário.
        for(var i = 0; i < received.length; i++){
            friendsId.push(received[i].id_user_send);
        }

        //listando os posts de cada um dos amigos do usuário.
        const posts: Post[] = [...myPosts];
        for(var i = 0; i < friendsId.length; i++){
            const friendPosts = await this.postsRepository.listById(friendsId[i]);
            posts.concat(friendPosts);
        }

        //ordenando os posts por data de criação.
        posts.sort(function (a, b) {
            return (a.created_at < b.created_at) ? 1 : ((b.created_at < a.created_at) ? -1 : 0);
        });

        return posts;
    }

}