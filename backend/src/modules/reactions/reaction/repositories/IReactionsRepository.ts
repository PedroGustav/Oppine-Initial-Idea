import ICreateReactionDTO from "../dtos/ICreateReactionDTO";
import Reaction from "../infra/typeorm/entities/Reaction";
interface countReactionsData{
    id_post: string;
    type: string;
}
export default interface IReactionsRepoository{
    create(Data: ICreateReactionDTO ): Promise<Reaction>;
    count({ id_post, type}: countReactionsData): Promise<number>;
    delete(id: string): Promise<string>;
}