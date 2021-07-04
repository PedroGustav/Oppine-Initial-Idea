import ICreatePostDTO from "../dtos/ICreatePostDTO";
import Post from "../infra/typeorm/entities/Post";

export default interface IPostsRepository{
    create(Data: ICreatePostDTO): Promise<Post>;
    save(Post: Post): Promise<Post>;
    listById(user_id: string): Promise<Post[]>;
}